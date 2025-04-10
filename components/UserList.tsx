import React, { useState } from "react";
import { User } from "../types/User";
import UserCard from "./UserCard";

// UserListPropsインターフェースの定義
interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  // 3.UserListコンポーネントの表示用のデータを用意し、state管理する
  const [userList, setUserList] = useState<User[]>(users);

  // 3.削除が実行されたらstateが更新される関数を追加（filter使用）
  const handleDelete = (deletedUserId: number) => {
    setUserList(userList.filter((user) => user.id !== deletedUserId));
  };

  return (
    <>
      {userList.map((user) => (
        <UserCard key={user.id} user={user} onDelete={handleDelete} />
      ))}
    </>
  );
};

export default UserList;