// components/parts/CustomCard.tsx
import React from "react";
import { Card, CardContent, Typography, CardActions } from "@mui/material";


// インターフェースを修正
interface CustomCardProps {
  title: string; // カードのタイトル
  description: string; // カードの説明
  actions?: React.ReactNode; // カードのアクション（ボタンなど）
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  actions,
}) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        {/* title と description を表示 */}
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">
          {description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </Typography>
      </CardContent>
      {/* actions が存在する場合に表示 */}
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
};

export default CustomCard;
