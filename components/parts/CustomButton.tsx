// components/parts/CustomButton.tsx

import { Button, ButtonProps, SxProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  variantType?: 'primary' | 'secondary' | 'danger';
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  variantType = 'primary',
  ...props
}) => {
  let color: ButtonProps['color']; // Buttonのcolorプロパティの型を指定
  let customStyles: SxProps = {}; // カスタムスタイルを格納する変数

  // variantTypeに応じてcolorを変化させる
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
    <Button 
      color={color} 
      variant="contained" 
      sx={{ ...customStyles }} 
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;