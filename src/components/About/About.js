import {
  Section,
  Divider,
  Img,
  Wave,
  Gap,
} from '../globalStyles/Global.styled';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const About = () => {
  return (
    <Section color>
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
            {itemData.map((item, idx) => (
              <ImageListItem key={item.img}>
                <img
                  key={`about_img-${idx}`}
                  src={`${item.img}`}
                  srcSet={`${item.img}?`}
                  alt=''
                  loading='lazy'
                />
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
            }}
            maxWidth={{ xs: 500, md: 300 }}
            mb={{ xs: 10, md: 0 }}
            ml={{ xs: 'auto', md: 10 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            tristique elit magna, vitae ornare tellus placerat non. Nunc a
            tortor arcu.
          </Typography>
          <Typography
            sx={{ maxWidth: 500, marginLeft: 10 }}
            display={{ xs: 'none', md: 'block' }}
          >
            Curabitur non est ac tortor auctor congue ut eget dolor. Curabitur
            nec ante id urna fringilla tincidunt ac in enim. Duis vestibulum
            neque ac dui molestie dapibus. Vestibulum feugiat magna enim, sit
            amet tristique nisl cursus ut. Aliquam at venenatis ex, sit amet
            egestas ipsum. Aenean volutpat odio tempus nulla euismod
            consectetur. Quisque vel tortor pellentesque, faucibus sem eu,
            vehicula urna.
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
          <Img src='./images/band1.jpg' />
          <Img src='./images/band2.jpg' />
        </Box>
      </Box>
      <Gap />
      <Wave src='./images/wave2.svg' alt='' />{' '}
    </Section>
  );
};

const itemData = [
  {
    img: './images/band1.jpg',
  },
  { img: './images/notes.jpg' },
  {
    img: './images/band2.jpg',
  },
  {
    img: './images/band3.jpg',
  },
  {
    img: './images/band4.jpg',
  },
  {
    img: './images/band5.jpg',
  },
  { img: './images/wedding1.jpg' },
  { img: './images/mamczyk1.jpg' },
];

export default About;
