// components/RegisterForm.tsx

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography, } from "@mui/material";
import { createUser } from "../utils/api";
// import { useNavigate } from "react-router-dom";

// RegisterFormProps インターフェースの定義
interface RegisterFormProps {
  onSuccess?: () => void; // 登録成功時のコールバック
  onError?: (error: any) => void; // 登録失敗時のコールバック
  disabled?: boolean; // ボタンの無効化
}

// フォームの入力データの型を定義
interface RegisterFormInputs {
  name: string;
  email: string;
  role: string;
}
// RegisterFormコンポーネントの定義
const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess, onError, disabled }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  
  // フォーム送信時の処理
  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      await createUser(data); // APIを使用して新規ユーザーを作成
      if (onSuccess) {
        onSuccess(); // 成功時のコールバックを呼び出し
      }
    } catch (error) {
      console.error("登録に失敗しました:", error);
      if (onError) {
        onError(error); // 失敗時のコールバックを呼び出し
      }
    }
  };
  

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        新規登録
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 名前入力 */}
        <TextField
          label="名前"
          fullWidth
          margin="normal"
          {...register("name", { 
            // タスク4-1バリデーションルールを設定
            required: "名前は必須です", 
            minLength: { value: 2, message: "名前は2文字以上で入力してください" },
            maxLength: { value: 10, message: "名前は10文字以内で入力してください" },
          })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        {/* メール入力 */}
        <TextField
          label="メール"
          fullWidth
          margin="normal"
          {...register("email", {
            required: "メールは必須です",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "有効なメールアドレスを入力してください",
            },
          })}
          error={!!errors.email} // エラーメッセージの表示
          helperText={errors.email?.message} // エラーメッセージの表示
        />
        {/* ロール入力 */}
        <TextField
          label="ロール"
          fullWidth
          margin="normal"
          {...register("role", { 
            required: "ロールは必須です",
            pattern:{
              value: /^[a-zA-Z]+$/,
              message: "ロールは英字のみで入力してください。",
            },
          })} 
          error={!!errors.role}
          helperText={errors.role?.message}
        />
        {/* 登録ボタン */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={disabled} // ボタンの無効化
        >
          登録
        </Button>
      </form>
    </Box>
  );
};

export default RegisterForm;
