// components/parts/CustomButton.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./CustomButton";

// TODO: メタデータのエクスポート
const meta: Meta<typeof CustomButton> = {
  title: "Components/Parts/CustomButton",
  component: CustomButton,
  tags: ["autodocs"],
};

export default meta;

// TODO: ストーリーの定義
// Primary ボタンのストーリー
type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  args: {
    variantType: "primary",
    children: "Primary Button",
  },
};

// TODO: 上記サンプルを参考に[Secondary][Danger]を設定する
// Secondary ボタンのストーリー
export const Secondary: Story = {
  args: {
    variantType: "secondary",
    children: "Secondary Button",
  },
};

// Danger ボタンのストーリー
export const Danger: Story = {
  args: {
    variantType: "danger",
    children: "Danger Button",
  },
};
