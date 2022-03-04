import { useState, useEffect } from 'react';
import { Section, Divider } from '../globalStyles/Global.styled';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { MyButton } from '../globalStyles/Global.styled';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Pagination } from '@mui/material';
import Wave from '../globalStyles/Wave';
import { useFetch } from 'react-async';
import { URL } from '../../api.config';
const NUM_PER_PAGE = 4;

const Work = () => {
  const [page, setPage] = useState(1);
  const [videos, setVideos] = useState([]);
  const { data } = useFetch(`${URL}/api/videos`, {
    headers: { accept: 'application/json' },
  });

  useEffect(() => {
    if (data) {
      setVideos(data.data.map(e => e.attributes));
    }
  }, [data]);

  console.log(videos);

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
                borderRadius: 6,
                boxShadow:
                  'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
                transition: 'all 1s ease-out',
                '&:hover': {
                  transform: 'scale(1.1)',
                },

                border: '1px solid white',
              }}
              key={`work_card-${idx}`}
            >
              <CardMedia
                allowFullScreen
                component='iframe'
                alt=''
                height='200'
                src={vid.iframe}
                sx={{
                  width: 300,
                  position: 'relative',
                  right: 5,
                  bottom: 3,
                }}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {vid.name}
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
        sx={{
          '& .MuiPaginationItem-root': {
            color: '#fff',
            fontSize: '1.2rem',
            fontWeight: 'bold',
          },
        }}
        page={page}
        onChange={(e, v) => setPage(v)}
        count={Math.ceil(videos.length / NUM_PER_PAGE)}
      />
      <Wave />
    </Section>
  );
};

export default Work;
