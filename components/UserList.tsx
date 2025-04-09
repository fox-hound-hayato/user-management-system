import { User } from "../types/User";
import UserCard from "./UserCard";

// 2.UserListPropsインターフェースの定義
interface UserListProps {
  users: User[];
} 

// 3.UserListPropsで定義した内容を受け取る　
const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <>
     {/* 4.UserListPropsで取得したユーザー情報を利用して、UserCardコンポーネントを呼び出す（map利用） */}
     {/* UserList コンポーネント内で fetch は⾏わない */}
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
};

export default UserList;