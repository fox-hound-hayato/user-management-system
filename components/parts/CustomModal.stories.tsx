// components/parts/CustomModal.stories.tsx

import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CustomModal from "./CustomModal";
import CustomButton from "./CustomButton";
import { Box } from "@mui/material";

// メタデータ
const meta: Meta<typeof CustomModal> = {
    title: "Components/CustomModal",
    component: CustomModal,
    tags: ["autodocs"],
  };

export default meta;  

// ストーリーの定義
type Story = StoryObj<typeof CustomModal>;

// デフォルトストーリーの作成
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <Box>
        {/* クリックでモーダル開閉させる */}
        <CustomButton variantType="primary" onClick={() => setOpen(true)}>
          モーダルを開く
        </CustomButton>
        <CustomModal
        // Propを渡す
        open={open} // モーダルの開閉状態を管理するためのstateを渡す
        title="モーダルのタイトル" // モーダルのタイトルを渡す
        content="モーダルの内容" // モーダルの内容を渡す
        onClose={() => setOpen(false)}// onCloceはsetOpenにfalseを渡す
        onConfirm={() => { // onConfirmはalert()を使ってクリックしたことを知らせる
            alert("クリックされました！"); 
            setOpen(false); //// setOpenにfalseを渡す モーダルを閉じる
        }}
        />
      </Box>
    );
  },
};
