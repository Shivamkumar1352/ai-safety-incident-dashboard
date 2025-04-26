import { Button } from '@mui/material';
import { useTheme } from '../context/ThemeContext';
import { Brightness4, Brightness7 } from '@mui/icons-material';

export const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      color="inherit"
      startIcon={mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    >
      {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </Button>
  );
};