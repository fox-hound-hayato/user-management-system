'use client'; // クライアントコンポーネントとしてマーク
import React from 'react';
import RegisterForm from '../../components/RegisterForm';
import { Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation'; // ルーティング用
  
const RegisterPage: React.FC = () => {
  const router = useRouter(); // ルーターの取得
  // 新規登録ページの実装
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        新規登録
      </Typography>
      {/* RegisterForm コンポーネントのレンダリング 新規登録画⾯の表⽰*/}
      <RegisterForm
        onSuccess={() => router.push('/users') } // 成功時の挙動
        onError={(error) => alert(`登録失敗: ${error}`)} // 失敗時の挙動
      />
    </Box>
  );
};

export default RegisterPage;