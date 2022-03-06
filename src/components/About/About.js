import { Section, Divider, Img } from '../globalStyles/Global.styled';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Wave from '../globalStyles/Wave';
import { useFetch } from 'react-async';
import { URL } from '../../api.config';
import { useEffect, useState } from 'react';
import qs from 'qs';

const query = qs.stringify(
  {
    populate: '*',
  },
  {
    encodeValuesOnly: true,
  }
);

const About = () => {
  const { data } = useFetch(`${URL}/api/about?${query}`, {
    headers: { accept: 'application/json' },
  });
  const [desc, setDesc] = useState({ short: '', long: '' });
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (data) {
      const newData = data.data.attributes;
      console.log(data);
      setDesc({
        short: newData.opis,
        long: newData.rozszerzony,
      });

      setPhotos(newData.zdjecia.data.map(e => ({ img: e.attributes.url })));
    }
  }, [data]);

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
                <img
                  src={`${URL}${item.img}`}
                  srcSet={`${URL}${item.img}?`}
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
              paddingLeft: 5,
              paddingRight: 5,
            }}
            maxWidth={{ xs: 500, md: 300 }}
            mb={{ xs: 10, md: 0 }}
            ml={{ xs: 'auto', md: 10 }}
          >
            {desc.short}
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
            {desc.long}
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
      <Wave colored />
    </Section>
  );
};

export default About;
