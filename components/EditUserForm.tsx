"use client"; // クライアントコンポーネントとしてマーク

import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { fetchUserById, updateUser } from "../utils/api";
import { User } from '../types/User'; // User型をインポート

// EditUserFormProps インターフェースの定義
interface EditUserFormProps {
  userId: number; // ユーザーID
  disabled?: boolean; // ボタンの無効化
  onSuccess?: () => void; // 成功時のコールバック関数
}

// フォームの入力データの型を定義
interface EditUserFormInputs {
  name: string;
  email: string;
  role: string;
}

const EditUserForm: React.FC<EditUserFormProps> = ({ userId, disabled, onSuccess }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<EditUserFormInputs>();

  // ユーザー情報を取得してフォームに初期値を設定
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const user: User | null = await fetchUserById(userId); // User型を指定
        if (!user) {
          throw new Error("ユーザーが見つかりませんでした。");
        }
        // resetを使用してフォーム全体の初期値を設定
        reset({
          name: user.name,
          email: user.email,
          role: user.role,
        });
      } catch (err) {
        console.error("ユーザー情報の取得に失敗しました:", err);
      }
    };

    loadUserData();
  }, [userId, reset]);

  // フォーム送信時の処理
  const onSubmit: SubmitHandler<EditUserFormInputs> = async (data) => {
    try {
      await updateUser(userId, data); // APIを使用してユーザー情報を更新
      if (onSuccess) {
        onSuccess();
      }  // 成功時にコールバックを呼び出す
    } catch (err) {
      console.error("ユーザー情報の更新に失敗しました:", err);
      alert("ユーザー情報の更新に失敗しました。");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        ユーザー情報編集
      </Typography>
      {isSubmitSuccessful && <Alert severity="success">更新が成功しました。</Alert>}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 名前入力 */}
        <TextField
          label="名前"
          fullWidth
          margin="normal"
          {...register("name", { required: "名前は必須です。" })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        {/* メール入力 */}
        <TextField
          label="メール"
          type="email"
          fullWidth
          margin="normal"
          {...register("email", {
            required: "メールは必須です。",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "有効なメールアドレスを入力してください。",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        {/* ロール入力 */}
        <TextField
          label="ロール"
          fullWidth
          margin="normal"
          {...register("role", { required: "ロールは必須です。" })}
          error={!!errors.role}
          helperText={errors.role?.message}
        />
        {/* 更新ボタン */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={disabled} // ボタンの無効化
        >
          更新
        </Button>
      </form>
    </Box>
  );
};

export default EditUserForm;