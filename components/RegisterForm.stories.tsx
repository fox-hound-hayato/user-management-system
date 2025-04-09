// components/RegisterForm.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import RegisterForm from "./RegisterForm";

// メタデータの定義
const meta: Meta<typeof RegisterForm> = {
  title: "Components/RegisterForm", // ストーリーのタイトル
  component: RegisterForm, // 対象コンポーネント
  tags: ["autodocs"], // 自動生成ドキュメント用のタグ
};

// ストーリーの型定義
type Story = StoryObj<typeof RegisterForm>;

// デフォルトストーリーの定義
export const Default: Story = {
    args: {
        onSuccess: () => alert("登録成功！"), // 登録成功時の挙動を確認
        onError: (error) => alert(`登録失敗: ${error}`), // 登録失敗時の挙動を確認
        disabled: false, // ボタンの無効化を解除
    },
};

export default meta;