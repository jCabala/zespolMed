import { Section, Divider, Wave, Gap } from '../globalStyles/Global.styled';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { MyButton } from '../globalStyles/Global.styled';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const members = [
  {
    name: 'Dawid Olchawa',
    img: './images/dawid1.jpg',
  },
  {
    name: 'Jakub Mamczyk',
    img: './images/mamczyk1.jpg',
  },
];

const Members = () => {
  return (
    <Section color>
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
              src={mem.img}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {mem.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      />
      <Gap />
      <Wave src='./images/wave2.svg' />
    </Section>
  );
};

export default Members;
