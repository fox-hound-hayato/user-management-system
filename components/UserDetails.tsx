import React from "react";
import { User } from "../types/User";
import { Card, CardContent, Typography } from "@mui/material";

// 2.データを受け取るためのインターフェースの定義
interface UserDetailsProps {
  user: User;
}

// 3.UserDetailsPropsで定義した内容を受け取る
const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          ユーザー詳細
        </Typography>
        <Typography variant="body1">ID: {user.id}</Typography>
        <Typography variant="body1">名前: {user.name}</Typography>
        <Typography variant="body1">メールアドレス: {user.email}</Typography>
        <Typography variant="body1">役職: {user.role}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserDetails;