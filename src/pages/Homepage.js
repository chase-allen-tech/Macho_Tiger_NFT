// material
import {
  Box,
  Stack,
  Container,
  Typography,
  Button,
  Divider,
  OutlinedInput,
  InputAdornment,
  Grid,
} from "@mui/material";

import CountDown from "components/CountDown";
import EnticementSlick from "components/EnticementSlick";
import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";
import { Icon } from "@iconify/react";
import twitterFill from "@iconify/icons-cib/twitter";
import linkedinFill from "@iconify/icons-cib/linkedin";

const TEAMS = [
  {
    name: "Mohamed - Bengal Tiger",
    image: "Kusama",
    role: "Founder/Biz Lead",
    twitter: "",
    linkedin: "",
  },
  {
    name: "Mohamed - Bengal Tiger",
    image: "Kusama",
    role: "Founder/Biz Lead",
    twitter: "",
    linkedin: "",
  },
  {
    name: "Mohamed - Bengal Tiger",
    image: "Kusama",
    role: "Founder/Biz Lead",
    twitter: "",
    linkedin: "",
  },
  {
    name: "Mohamed - Bengal Tiger",
    image: "Kusama",
    role: "Founder/Biz Lead",
    twitter: "",
    linkedin: "",
  },
];

export default function Detailpage() {
  return (
    <>
      <Stack>
        <Box component="img" src="/banner.jpg" />
      </Stack>
      <Container maxWidth="xl">
        <Stack direction="row" spacing={4} sx={{ mt: 10 }}>
          <Stack justifyContent="space-between" spacing={1}>
            <MotionInView variants={varFadeInUp}>
              <Typography variant="h3" color="#f9c470">
                THE STORY OF THE TIGERVERSE
              </Typography>
            </MotionInView>
            <Divider variant="middle" sx={{ my: 3 }} />
            <Typography variant="body1">
              Five Tiger Chieftains from the diverse Tribes of the Verse met up
              to address the impending peril their kind are facing from
              extinction level events.
            </Typography>
            <Typography>
              To revive the big cat spirit among the only remaining 3900 tigers
              roaming the wilderness, they came up with a creative solution to
              raise awareness for their plight.
            </Typography>
            <Typography>
              {" "}
              As a projection of strength, they decided to launch a Macho Tigers
              Tribe NFT collection to show the Metaverse how strong a bunch of
              super cats they are, and to ensure their fate doesn’t become like
              that of their extinct bretheren.{" "}
            </Typography>
            <Typography>
              {" "}
              The initial collection aims to showcase 3900 “Origins” Tigers in
              an effort to promote awareness, raise funds and assist
              conservation efforts towards the TX2 goal of the WWF, before 2022,
              The Year of the Tiger.
            </Typography>
            <Typography>
              {" "}
              The initial mint will be 3900 randomly generated tigers with about
              100 attributes and 6 rarities. The plan is to eventually breed
              baby cubs to ensure the survival of their species and avert total
              extinction.
            </Typography>
          </Stack>
          <Box
            component="img"
            src="/tigers.gif"
            sx={{ width: 500, borderRadius: 1 }}
          />
        </Stack>
      </Container>
      <Stack textAlign="center" sx={{ mt: 15 }}>
        <MotionInView variants={varFadeInUp}>
          <Typography variant="h3" color="#f9c470">
            TIGERS TRIBE HOLDER ENTICEMENTS
          </Typography>
        </MotionInView>
        <Divider variant="middle" sx={{ my: 3 }} />
        <EnticementSlick />
      </Stack>
      <Stack textAlign="center" sx={{ mt: 15 }}>
        <Typography variant="h3" color="#f9c470" sx={{ mb: 4 }}>
          WHEN IS THE MINT?
        </Typography>
        <CountDown />
      </Stack>
      <Container maxWidth="md">
        <Stack textAlign="center" sx={{ mt: 15 }}>
          <Typography variant="h3" color="#f9c470" sx={{ mb: 4 }}>
            FOR UPDATES, JOIN BELOW:
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="warning"
            sx={{ mb: 2, borderRadius: 0 }}
          >
            Join Discord
          </Button>
          <Button
            variant="contained"
            size="large"
            color="info"
            sx={{ background: "white", color: "black", mb: 2, borderRadius: 0 }}
          >
            Join Twitter
          </Button>
          <OutlinedInput
            fullWidth
            placeholder="Sign up for the email updates"
            endAdornment={
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  size="large"
                  sx={{ background: "white", color: "black", borderRadius: 0 }}
                >
                  Notify Me
                </Button>
              </InputAdornment>
            }
            sx={{
              my: 5,
              pr: 1,
              borderRadius: 0,
              transition: (theme) =>
                theme.transitions.create("box-shadow", {
                  easing: theme.transitions.easing.easeInOut,
                  duration: theme.transitions.duration.shorter,
                }),
              "&.Mui-focused": {
                boxShadow: (theme) => theme.customShadows.z8,
              },
              "& fieldset": {
                borderWidth: `1px !important`,
                borderColor: (theme) =>
                  `${theme.palette.grey[500_32]} !important`,
              },
            }}
          />
        </Stack>
        <Stack textAlign="center">
          <Typography>Stage 1: Pre-Sale- November 25-26 2021</Typography>
          <Typography>
            Stage 2: Public Sale on November 27 2021 until sell out
          </Typography>
          <Typography>Stage 3: NFT reveal 2 days after sell out</Typography>
        </Stack>
      </Container>

      <Container maxWidth="lg">
        <Stack alignItems="center" textAlign="center" sx={{ mt: 15 }}>
          <Typography variant="h3" color="#f9c470" sx={{ mb: 4 }}>
            WHERE TO MINT?
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="warning"
            sx={{ mb: 2, borderRadius: 0, width: 300, height: 60 }}
          >
            Mint Now!
          </Button>
        </Stack>
        <Stack textAlign="center">
          <Typography variant="h4" sx={{ my: 1 }}>
            Total Mint : 56
          </Typography>
          <Typography sx={{ fontStyle: "italic" }}>
            PRICE&nbsp;:&nbsp;&nbsp;
            <Typography component="span" color="yellow">
              0.03 ETH-PRESALE
            </Typography>
            ,&nbsp;&nbsp;&nbsp;
            <Typography component="span" color="success.main">
              0.05 ETH-PUBLIC SALE
            </Typography>
            , &nbsp;&nbsp;&nbsp;
            <Typography component="span" fontWeight="bold" >
              MAXIMUM 2 PER WALLET
            </Typography>
          </Typography>
        </Stack>
      </Container>

      <Container maxWidth="xl">
        <Stack alignItems="center" textAlign="center" sx={{ mt: 15 }}>
          <Typography variant="h3" color="#f9c470" sx={{ mb: 4 }}>
            TEAM MEMBERS
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-between" flexWrap>
          {TEAMS.map((member) => (
            <Stack>
              <Box sx={{ p: 1.5, border: "1px solid white" }}>
                <Box
                  component="img"
                  src={`/${member.image}.png`}
                  sx={{ width: 280 }}
                />
              </Box>
              <Typography sx={{ mt: 1 }}>{member.name}</Typography>
              <Typography variant="body2" color="#f9c470">
                {member.role}
              </Typography>
              <Stack
                justifyContent="center"
                alignItems="center"
                direction="row"
                spacing={3}
                sx={{ mt: 2 }}
              >
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    border: "1px solid white",
                  }}
                >
                  <Icon icon={twitterFill} fontSize={16} />
                </Stack>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    border: "1px solid white",
                  }}
                >
                  <Icon icon={linkedinFill} fontSize={16} />
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Container>
    </>
  );
}
