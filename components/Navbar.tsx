import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Navbar: React.FC = () => {


  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ユーザー管理システム
        </Typography>
        <Box>
          <Button color="inherit" component={Link} href="/users">
            ユーザー一覧
          </Button>
          {/* 上部メニューに新規登録ページへのリンクを実装 */}
          <Button color="inherit" component={Link} href="/register">
            新規登録
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;