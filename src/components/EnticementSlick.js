import { Box, Stack, Typography } from "@mui/material";
import Slider from "react-slick";

const ENTICEMENTS = [
  {
    title: "SURPRISES",
    description:
      "Giveaways\\, competitions on Discord and Twitter for trips\\, live events and safaris for the Tigers Tribe",
  },
  {
    title: "MERCH",
    description: "Tigers Tribe Merch store with exclusive holder discounts",
  },
  {
    title: "COLLECTIONS GALORE",
    description:
      "Upcoming collections to highlight the accomplishments of the TX2 goal (at least) on the metaverse",
  },
  {
    title: "AIRDROPS & PASSIVE INCOME",
    description:
      "Free NFTs and Passive income benefits for holders after allcollections launched",
  },
  {
    title: "AWARENESS",
    description:
      "Raising awareness about Wild Life Conservation through Collabs with Tiger Conservation NGOs, NPOs and influencers involved in solving real world problems",
  },
];
export default function EnticementSlick() {
  const settings = {
    infinite: false,
    speed: 1000,
    autoplaySpeed: 3000,
    // autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Stack sx={{ px: 4 }}>
        <Slider {...settings}>
          {ENTICEMENTS.map((item) => (
            <Stack sx={{ px: 1 }}>
              <Stack
                sx={{
                  p: 1,
                  border: "1px solid #999999",
                  background: "#111111",
                }}
              >
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    p: 4,
                    border: "1px solid #555555",
                    background: "#000000",
                    height: 340,
                  }}
                >
                  <Typography variant="h4">{item.title}</Typography>
                  <Typography>{item.description}</Typography>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Slider>
      </Stack>
    </>
  );
}
