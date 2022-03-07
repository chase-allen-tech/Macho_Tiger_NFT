import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { styled } from "@mui/styles";
import {
  Box,
  Button,
  Stack,
  AppBar,
  Toolbar,
  Container,
  Typography,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import Logo from "components/Logo";
import ConnectButton from "components/ConnectButton";
import { Icon } from "@iconify/react";
import twitterFill from "@iconify/icons-cib/twitter";
import discordFill from "@iconify/icons-cib/discord";
// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 160;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  background: "#000",
  boxShadow: theme.customShadows.z24,
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP,
  },
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <AppBar position="static">
      <ToolbarStyle disableGutters sx={{}}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={5}
            flex={1}
            sx={{ mr: 10, fontSize: 16 }}
          >
            <Box
              component={ScrollLink}
              to="home"
              spy
              smooth
              sx={{
                cursor: "pointer",
                color: "white",
                textTransform: "uppercase",
                "&:hover": { color: "gold" },
              }}
            >
              Home
            </Box>
            <Box
              component={ScrollLink}
              to="home"
              spy
              smooth
              sx={{
                cursor: "pointer",
                color: "white",
                textTransform: "uppercase",
                "&:hover": { color: "gold" },
              }}
            >
              Our Story
            </Box>
            <Box
              component={ScrollLink}
              to="home"
              spy
              smooth
              sx={{
                cursor: "pointer",
                color: "white",
                textTransform: "uppercase",
                "&:hover": { color: "gold" },
              }}
            >
              Mint
            </Box>
            <Box
              component={ScrollLink}
              to="home"
              spy
              smooth
              sx={{
                cursor: "pointer",
                color: "white",
                textTransform: "uppercase",
                "&:hover": { color: "gold" },
              }}
            >
              Roadmap
            </Box>
            <Box
              component={ScrollLink}
              to="home"
              spy
              smooth
              sx={{
                cursor: "pointer",
                color: "white",
                textTransform: "uppercase",
                "&:hover": { color: "gold" },
              }}
            >
              Team
            </Box>
          </Stack>

          <ScrollLink to="home" spy smooth>
            <Logo />
          </ScrollLink>

          <Stack
            direction="row"
            alignItems="center"
            flex={1}
            justifyContent="flex-start"
            spacing={7}
            sx={{ ml: 10 }}
          >
            <Stack
              justifyContent="center"
              alignItems="center"
              direction="row"
              spacing={1}
              sx={{
                px: 2,
                py: 1,
                border: "1px solid white",
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": { borderRadius: "16px 0 16px 0" },
              }}
            >
              <Box
                component="img"
                src="/socials/opensea.svg"
                sx={{ width: 24, height: 24 }}
              />
              <Typography variant="body2">Opensea</Typography>
            </Stack>

            <Stack
              justifyContent="center"
              alignItems="center"
              direction="row"
              spacing={1}
              sx={{
                px: 2,
                py: 1,
                border: "1px solid white",
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": { borderRadius: "16px 0 16px 0" },
              }}
            >
              <Icon icon={discordFill} fontSize={20} />
              <Typography variant="body2">Discord</Typography>
            </Stack>

            <Stack
              justifyContent="center"
              alignItems="center"
              direction="row"
              spacing={1}
              sx={{
                px: 2,
                py: 1,
                border: "1px solid white",
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": { borderRadius: "16px 0 16px 0" },
              }}
            >
              <Icon icon={twitterFill} fontSize={20} />
              <Typography variant="body2">Twitter</Typography>
            </Stack>
          </Stack>
        </Container>
      </ToolbarStyle>
    </AppBar>
  );
}
