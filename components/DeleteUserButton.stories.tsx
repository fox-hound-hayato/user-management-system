import { Meta, StoryObj } from "@storybook/react";
import DeleteUserButton from "./DeleteUserButton";

// 2. Metaを使用してストーリーメタデータを定義
const meta: Meta<typeof DeleteUserButton> = {
  title: "Components/DeleteUserButton",
  component: DeleteUserButton,
};

export default meta;

// 3. StoryObjを使用してストーリーを定義
type Story = StoryObj<typeof DeleteUserButton>;

// 4. デフォルトストーリーに例となるユーザーのIDを設定
export const Default: Story = {
  args: {
    userId: 1,
    onDelete: (userId: number) => {
      console.log(`ユーザーID ${userId} が削除されました`);
    },
  },
};