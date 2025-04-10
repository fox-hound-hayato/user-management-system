import { Meta, StoryObj } from "@storybook/react";
import UserDetails from "./UserDetails";


// 2. Metaを使用してストーリーメタデータを定義
const meta: Meta<typeof UserDetails> = {
  title: "Components/UserDetails",
  component: UserDetails,
};

export default meta;

// 3. StoryObjを使用してストーリーを定義
type Story = StoryObj<typeof UserDetails>;

// 4. デフォルトストーリーに例となるユーザーデータを設定
export const Default: Story = {
  args: {
    user: {
      id: 1,
      name: "山田 太郎",
      email: "taro@example.com",
      role: "管理者",
      deleted: false,
    },
  },
};