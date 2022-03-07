import { Stack, Box, Typography, Container, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import twitterFill from "@iconify/icons-cib/twitter";
import discordFill from "@iconify/icons-cib/discord";
import instagramFill from "@iconify/icons-cib/instagram";
export default function MainFooter() {
  return (
    <Stack textAlign="center" sx={{ py: 4, borderTop: "1px solid #666666" }}>
      <Container maxWidth="lg">
        <Typography>
          Copyright © 2021 TigersVerse - A CulturedVerse Project
        </Typography>
        <Typography>All rights reserved</Typography>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
          <Typography variant="body2">
            Smart Contract : 0x438Aa0f9941384Db5331715715050E8C68F72237
          </Typography>
          <Stack direction="row" spacing={3}>
            <IconButton
              sx={{
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <Icon icon={discordFill} fontSize={32} color="white" />
            </IconButton>
            <IconButton
              sx={{
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <Icon icon={twitterFill} fontSize={32} color="white" />
            </IconButton>
            <IconButton
              sx={{
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <Icon icon={instagramFill} fontSize={32} color="white" />
            </IconButton>
            <IconButton
              sx={{
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <Box
                component="img"
                src="/socials/opensea.svg"
                sx={{ width: 32 }}
              />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
