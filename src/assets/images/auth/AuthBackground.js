//import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import authBackgroundPng from 'C:\\Users\\dsana\\Development\\GithubProjects\\Cryptonite\\src\\components\\Logo\\Untitled design (1).png'; // Import the PNG image

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  //const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundImage: `url(${authBackgroundPng})`
      }}
    />
  );
};

export default AuthBackground;
