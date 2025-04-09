import { Meta, StoryObj } from "@storybook/react";
import UserList from "./UserList";

// 2. Metaを使用してメタデータを定義
const meta: Meta<typeof UserList> = {
  title: "Components/UserList",
  component: UserList,
};

export default meta;

// 3. StoryObjを使用してストーリーを定義
type Story = StoryObj<typeof UserList>;

// 4. デフォルトストーリーに例となるユーザーデータを設定
export const Default: Story = {
  args: {
    users: [
      {
        id: 1,
        name: "山田 太郎",
        email: "taro@example.com",
        role: "管理者",
        deleted: false,
      },
      {
        id: 2,
        name: "佐藤 花子",
        email: "hanako@example.com",
        role: "一般ユーザー",
        deleted: false,
      },
    ],
  },
};
