// components/parts/CustomButton.tsx

import React from 'react';
import { Button, ButtonProps, SxProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  variantType?: 'primary' | 'secondary' | 'danger';
}

const CustomButton: React.FC<CustomButtonProps> = ({ variantType = 'primary', ...props }) => {
  let color: ButtonProps['color']; // Buttonのcolorプロパティの型を指定
  let customStyles: SxProps = {}; // カスタムスタイルを格納する変数
	// variantTypeに応じてcolorを変化させる
  // colorの下にそれぞれ追記していく
  switch (variantType) {
    case 'primary':
      color = 'primary'; // 青 (#007BFF)
      customStyles = {
        backgroundColor: '#007BFF',
      };  
      break;
    case 'secondary':
      color = 'inherit'; // グレー (#6C757D)
      customStyles = {
        backgroundColor: '#6C757D',
      };
      break;
    case 'danger':
      color = 'error'; // 赤 (#DC3545)
      customStyles = {
        backgroundColor: '#DC3545',
      };
      break;
    default:
      color = 'primary';
  }


  return (
		// TODO: <Button>の実装
		// プロップスには[color][variant]を設定し、{...props}を最後に設定する
      <Button color={color} variant="contained" sx={{...customStyles}} {...props}>
      {props.children}
    </Button>
  );
}

export default CustomButton;