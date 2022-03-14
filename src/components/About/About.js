import { Section, Divider, Img } from '../globalStyles/Global.styled';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Wave from '../globalStyles/Wave';

const photos = [
  'band1.webp',
  'band2.webp',
  'band3.webp',
  'wedding1.webp',
  'band4.webp',
  'band5.webp',
];

const About = () => {
  return (
    <Section color id='about'>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        display={{
          sm: 'block',
          md: 'flex',
        }}
      >
        <Box
          sx={{ width: '50vw', overflowY: 'hidden', marginLeft: 10 }}
          display={{ xs: 'none', md: 'block' }}
        >
          <ImageList variant='masonry' cols={3} gap={8}>
            {photos.map((item, idx) => (
              <ImageListItem key={`about_img-${idx}`}>
                <img src={`./images/${item}`} alt='' loading='lazy' />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <div>
          <div style={{ marginLeft: 50 }}>
            <h1>O nas</h1>
            <Divider color />
          </div>
          <Typography
            sx={{
              width: '100%',
              paddingLeft: 5,
              paddingRight: 5,
              maxWidth: 500,
            }}
            mb={{ xs: 10, md: 0 }}
            ml={{ xs: 'auto', md: 10 }}
          >
            Zajmujemy się oprawą: <br /> - ślubów, <br /> - drogi weselnej,
            <br /> - wesel, <br /> - bankietów,
            <br /> - studniówek,
            <br /> - imprez okolicznościowych.
            <br />
            <br />
            Jesteśmy sześcioosobowym zespołem muzycznym, któremu nieobce są
            najróżniejsze gatunki muzyczne – zaczynając od disco polo i muzyki
            biesiadnej, kończąc na piosenkach góralskich, czy zagranicznych
            hitach. <br />
          </Typography>
          <Typography
            sx={{
              maxWidth: 500,
              marginLeft: 10,
              paddingLeft: 5,
              paddingRight: 5,
            }}
            display={{ xs: 'none', md: 'block' }}
          >
            Naszym priorytetem jest zagwarantowanie gościom niezapomnianej
            zabawy poprzez różnorodność muzyczną, wokalną oraz instrumentalną, a
            także zaangażowanie ich do wspólnego śpiewania piosenek regionalnych
            „przy stołach”. Muzyką urozmaicamy także uroczystości ślubów w stylu
            góralskim klub klasycznym – wedle upodobania. <br /> <br />
            Dysponujemy własnym profesjonalnym nagłośnieniem. <br />
            Wokale: dwa damskie oraz trzy męskie. <br /> Instrumentarium:
            skrzypce, trąbka, saksofon, akordeon, pianino, keyboard, gitara
            elektryczna, gitara basowa.
          </Typography>
        </div>

        <Box
          display={{ xs: 'flex', md: 'none' }}
          sx={{
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Img src='./images/band1.webp' />
          <Img src='./images/band2.webp' />
        </Box>
      </Box>
      <Wave colored />
    </Section>
  );
};

export default About;
