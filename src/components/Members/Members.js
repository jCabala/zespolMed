import { Section, Divider } from '../globalStyles/Global.styled';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Wave from '../globalStyles/Wave';
import { URL } from '../../api.config';
import { useFetch } from 'react-async';
import qs from 'qs';
import { useState, useEffect } from 'react';

const query = qs.stringify(
  {
    populate: '*',
  },
  {
    encodeValuesOnly: true,
  }
);

const Members = () => {
  const [members, setMembers] = useState([]);
  const { data } = useFetch(`${URL}/api/members?${query}`, {
    headers: { accept: 'application/json' },
  });

  useEffect(() => {
    if (data) {
      const mapped = data.data.map(e => ({
        name: e.attributes.name,
        img: e.attributes.photo.data.attributes.url,
      }));

      setMembers(mapped);
    }
  }, [data]);

  return (
    <Section color id='members'>
      <h1>Członkowie</h1>
      <Divider color />

      <AliceCarousel
        infinite
        autoPlay
        autoPlayInterval={2000}
        items={members.map(mem => (
          <Card
            sx={{
              aspectRatio: '1/1',
              maxWidth: 500,

              margin: 'auto',
            }}
          >
            <CardMedia
              allowFullScreen
              component='img'
              alt=''
              height='80%'
              src={`${URL}${mem.img}`}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {mem.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      />
      <Wave colored />
    </Section>
  );
};

export default Members;
