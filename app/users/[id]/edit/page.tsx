// app/users/[id]/edit/page.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React from "react";
import EditUserForm from "@../../../components/EditUserForm"; // コンポーネントをインポート
import { useRouter, useParams } from "next/navigation"; // URLパラメータを取得するために使用
import { Box, Typography } from "@mui/material";

// TODO: URLパラメータからユーザーIDを取得し、EditUserFormコンポーネントに渡す
const EditUserPage: React.FC = () => {
  const params = useParams(); // URLパラメータからユーザーIDを取得
  const router = useRouter();
  const userId = Number(params.id); // ユーザーIDを数値に変換

  // 編集完了時の処理
  const handleSuccess = () => {
    router.push("/users"); // ユーザー一覧画面に遷移
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        ユーザー編集
      </Typography>
      <EditUserForm
        userId={userId}
        disabled={false}
        onSuccess={handleSuccess}
      />
    </Box>
  );
};

export default EditUserPage;
