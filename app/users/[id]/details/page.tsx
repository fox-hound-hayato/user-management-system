'use client'; 

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // URLパラメータを取得するためのフック
import { fetchUserById } from "../../../../utils/api"; // ユーザー情報を取得するAPI関数
import { User } from "../../../../types/User"; // ユーザー型定義
import UserDetails from "../../../../components/UserDetails"; // ユーザー詳細を表示するコンポーネント
import { Box, Typography } from "@mui/material"; // UIコンポーネント

const UserDetailsPage: React.FC = () => {
  const { id } = useParams(); // URLからユーザーIDを取得
  const [user, setUser] = useState<User | null>(null); // ユーザー情報を格納する状態

  useEffect(() => {
    if (!id) return; // IDが存在しない場合は処理を中断

    const getUser = async () => {
      try {
        // APIからユーザー情報を取得
        const userData = await fetchUserById(Number(id));
        if (userData) {
          setUser(userData); // ユーザー情報を状態にセット
        }
      } catch (err) {
        console.error(err); // エラーをコンソールに出力
      }
    };

    getUser(); // ユーザー情報を取得する関数を実行
  }, [id]); // IDが変更されたときに再実行

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        ユーザー詳細 {/* ページタイトル */}
      </Typography>
      {/* ユーザー詳細情報を表示するコンポーネント */}
      {user && <UserDetails user={user} />}
    </Box>
  );
};

export default UserDetailsPage; // コンポーネントをエクスポート