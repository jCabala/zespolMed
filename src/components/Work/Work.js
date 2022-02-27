import { useState } from 'react';
import { Section, Divider, Wave, Gap } from '../globalStyles/Global.styled';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { MyButton } from '../globalStyles/Global.styled';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Pagination } from '@mui/material';

const NUM_PER_PAGE = 4;

const videos = [
  {
    title: 'Być Bliżej Ciebie Chcę',
    link: 'https://www.youtube.com/watch?v=v2hSHr3Yn0U',
    comp: 'https://www.youtube.com/embed/v2hSHr3Yn0U',
  },
  {
    title: 'Karczma Pod Reglami',
    link: 'https://www.youtube.com/watch?v=sKPCd0p1o2w',
    comp: 'https://www.youtube.com/embed/sKPCd0p1o2w',
  },
  {
    title: 'Bo Ja Cie Kochom',
    link: 'https://www.youtube.com/watch?v=8R7NWRh2YeY',
    comp: 'https://www.youtube.com/embed/8R7NWRh2YeY',
  },
  {
    title: 'Być Bliżej Ciebie Chcę',
    link: 'https://www.youtube.com/watch?v=v2hSHr3Yn0U',
    comp: 'https://www.youtube.com/embed/v2hSHr3Yn0U',
  },
  {
    title: 'Karczma Pod Reglami',
    link: 'https://www.youtube.com/watch?v=sKPCd0p1o2w',
    comp: 'https://www.youtube.com/embed/sKPCd0p1o2w',
  },
  {
    title: 'Bo Ja Cie Kochom',
    link: 'https://www.youtube.com/watch?v=8R7NWRh2YeY',
    comp: 'https://www.youtube.com/embed/8R7NWRh2YeY',
  },
  {
    title: 'Być Bliżej Ciebie Chcę',
    link: 'https://www.youtube.com/watch?v=v2hSHr3Yn0U',
    comp: 'https://www.youtube.com/embed/v2hSHr3Yn0U',
  },
  {
    title: 'Karczma Pod Reglami',
    link: 'https://www.youtube.com/watch?v=sKPCd0p1o2w',
    comp: 'https://www.youtube.com/embed/sKPCd0p1o2w',
  },
  {
    title: 'Bo Ja Cie Kochom',
    link: 'https://www.youtube.com/watch?v=8R7NWRh2YeY',
    comp: 'https://www.youtube.com/embed/8R7NWRh2YeY',
  },
  {
    title: 'Być Bliżej Ciebie Chcę',
    link: 'https://www.youtube.com/watch?v=v2hSHr3Yn0U',
    comp: 'https://www.youtube.com/embed/v2hSHr3Yn0U',
  },
  {
    title: 'Karczma Pod Reglami',
    link: 'https://www.youtube.com/watch?v=sKPCd0p1o2w',
    comp: 'https://www.youtube.com/embed/sKPCd0p1o2w',
  },
  {
    title: 'Bo Ja Cie Kochom',
    link: 'https://www.youtube.com/watch?v=8R7NWRh2YeY',
    comp: 'https://www.youtube.com/embed/8R7NWRh2YeY',
  },
];

const Work = () => {
  const [page, setPage] = useState(1);

  return (
    <Section>
      <h1>Nasza Twórczość</h1>
      <Divider />

      <Box
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {videos
          .slice((page - 1) * NUM_PER_PAGE, page * NUM_PER_PAGE)
          .map((vid, idx) => (
            <Card
              sx={{
                width: 300,
                margin: 10,
              }}
              key={`work_card-${idx}`}
            >
              <CardMedia
                allowFullScreen
                component='iframe'
                alt=''
                height='200'
                src={vid.comp}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {vid.title}
                </Typography>
              </CardContent>
              <CardActions>
                <a href={vid.link}>
                  <MyButton size='small'>YouTube</MyButton>
                </a>
              </CardActions>
            </Card>
          ))}
      </Box>
      <Pagination
        sx={{ color: 'white' }}
        page={page}
        onChange={(e, v) => setPage(v)}
        count={Math.ceil(videos.length / NUM_PER_PAGE)}
      />
      <Gap />
      <Wave src='./images/wave1.svg' />
    </Section>
  );
};

export default Work;
