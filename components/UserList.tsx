import React, { useState } from "react";
import { User } from "../types/User";
import { Box } from "@mui/material"; // Boxをインポート
import { softDeleteUser } from "../utils/api"; // APIをインポート
import CustomCard from "./parts/CustomCard"; // UserCard を CustomCard に変更
import CustomButton from "./parts/CustomButton";
import CustomModal from "./parts/CustomModal";

// UserListPropsインターフェースの定義
interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  // 3.UserListコンポーネントの表示用のデータを用意し、state管理する
  const [userList, setUserList] = useState<User[]>(users);
  const [open, setOpen] = useState<boolean>(false); // モーダルの開閉状態を管理するstateを追加


  // 3.削除が実行されたらstateが更新される関数を追加（filter使用）
  const handleDelete = async (deletedUserId: number) => { {
      try {
        await softDeleteUser(deletedUserId); // 論理削除を実行
        setUserList(userList.filter((user) => user.id !== deletedUserId));
        setOpen(false); // モーダルを閉じる
      } catch (error) {
        console.error("ユーザーの削除に失敗しました:", error);
        alert("ユーザーの削除に失敗しました。");
      }
    }
  };

  return (
    <>
      {userList.map((user) => (
        // 4. UserCardをCustomCardに変更し、propsを渡す
        <CustomCard
          key={user.id}
          title={user.name}
          description={`メール: ${user.email}, \n ロール: ${user.role}`}
          actions={
            <Box>
              <CustomButton
                size="small"
                variantType="primary"
                href={`/users/${user.id}/details`} // 詳細ボタンのリンク
              >
                詳細
              </CustomButton>
              <CustomButton
                size="small"
                variantType="secondary"
                href={`/users/${user.id}/edit`} // 編集ボタンのリンク
              >
                編集
              </CustomButton>
              <CustomButton
                size="small"
                variantType="danger"
                onClick={() => setOpen(true)} // 削除ボタンのクリックイベント
              >
                削除
              </CustomButton>
              <CustomModal
                title="削除確認"
                content={`ユーザー ${user.name} を削除しますか？`}
                onConfirm={() => handleDelete(user.id)} // 削除ボタンのクリックイベント
                onClose={() => setOpen(false)}
                open={open} // モーダルの開閉状態を管理するためのstateを渡す
                />
            </Box>
          }
        />
      ))}
    </>
  );
};

export default UserList;
