// components/EditUserForm.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import EditUserForm from "./EditUserForm";

// TODO: メタデータ
const meta: Meta<typeof EditUserForm> = {
  title: "Components/EditUserForm", // ストーリーのタイトル
  component: EditUserForm, // 対象コンポーネント
  tags: ["autodocs"], // 自動生成ドキュメント用のタグ
};
export default meta;

// TODO: ストーリーの定義
type Story = StoryObj<typeof EditUserForm>;

export const Default: Story = {
  args: {
    userId: 1, // 例となるユーザーID
    disabled: false, // ボタンの無効化を解除
  },
};
