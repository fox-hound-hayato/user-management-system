import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { User } from "../types/User";
import Link from "next/link";
// 2.UserCard コンポーネント内の削除ボタンに DeleteUserButton コンポーネントを入れる
// import DeleteUserButton from "./DeleteUserButton";
import CustomButton from "./parts/CustomButton"; // 1. CustomButtonをインポート
import { softDeleteUser } from "../utils/api"; // 2. APIをインポート

interface UserCardProps {
  user: User;
  onDelete: (userId: number) => void; // 3.再レンダリング用
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  const handleDelete = async () => {
      //削除ボタンを押した際に confirm を使って確認画⾯を表⽰させる
      if (confirm('本当にこのユーザーを削除しますか？')) {
        try {
          await softDeleteUser(user.id); // 論理削除を実行
          onDelete(user.id); // 削除成功後に再レンダリング用の関数を実行
        } catch (error) {
          console.error('ユーザーの削除に失敗しました:', error);
          alert('ユーザーの削除に失敗しました。');
        }
      }
    };

  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography color="text.secondary">{user.email}</Typography>
        <Typography variant="body2">役割: {user.role}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          component={Link}
          href={`/users/${user.id}/details`}
        >
          詳細
        </Button>
        <Button size="small" component={Link} href={`/users/${user.id}/edit`}>
          編集
        </Button>
         {/* 削除ボタンを CustomButton に差し替え */}
         <CustomButton
          variantType="danger"
          onClick={() => handleDelete()} // 4.削除ボタンのクリックイベント
        >
          削除
        </CustomButton>
      </CardActions>
    </Card>
  );
};

export default UserCard;
