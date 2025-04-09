'use client';

import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../../utils/api';
import { User } from '../../types/User'
import UserList from '@/components/UserList';
import { Typography, CircularProgress, Alert, Box } from '@mui/material';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 2.一覧ページにアクセスした際にユーザーの一覧を表示する
  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        console.log(data);
        setUsers(data);
      } catch (err) {
        setError('ユーザーの取得に失敗しました。' + err);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        ユーザー一覧
      </Typography>
      {/* 3.UserListコンポーネントの表示 */}
      {/* 取得したユーザー情報を UserLIstコンポーネントに渡してレンダリングする
　         ※propsで渡す */}
      <UserList users={users} />
    </Box>
  );
}

export default UsersPage;