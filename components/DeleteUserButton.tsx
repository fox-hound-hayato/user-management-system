import React from 'react';
import { Button } from '@mui/material';
import { softDeleteUser } from '../utils/api';

//２－１－２ 2.インターフェースの定義
interface DeleteUserButtonProps {
  userId: number;
  onDelete: (userId: number) => void; // 再レンダリング用
}

// ２－１－２ 3.DeleteUserButtonPropsで定義した内容の受け取り
const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({ userId, onDelete }) => {
    // ２－１－２ 4.削除機能の実装
  const handleDelete = async () => {
    //削除ボタンを押した際に confirm を使って確認画⾯を表⽰させる
    if (confirm('本当にこのユーザーを削除しますか？')) {
      try {
        await softDeleteUser(userId); // 論理削除を実行
        onDelete(userId); // 削除成功後に再レンダリング用の関数を実行
      } catch (error) {
        console.error('ユーザーの削除に失敗しました:', error);
        alert('ユーザーの削除に失敗しました。');
      }
    }
  };

  return (
    // ２－１－２ 5.削除ボタンの実装(onClick使用)
    <Button variant="contained" color="error" onClick={handleDelete}>
      削除
    </Button>
  );
};

export default DeleteUserButton;