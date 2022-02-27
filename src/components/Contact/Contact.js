import { Section, Divider, Gap } from '../globalStyles/Global.styled';
import { Box, Typography } from '@mui/material';
import { HiMusicNote, HiOutlineMail, HiPhone } from 'react-icons/hi';
import { Form, Input, Textarea, Submit, ContactData } from './Contact.styled';

const Work = () => {
  return (
    <Section>
      <Box
        flexDirection={{ xs: 'column', md: 'row' }}
        sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
      >
        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <h1>Oferta</h1>
          <Divider />
          <Typography
            vatiant='h3'
            fontSize='2rem'
            color='white'
            fontWeight='500'
          >
            Zajmujemy się oprawą muzyczną:
            <br /> <HiMusicNote /> uroczystości ślubhich, <br /> <HiMusicNote />{' '}
            imprez okolicznośhiowych, <br />
            <HiMusicNote /> wesel, <br /> <HiMusicNote /> studniuwek,
          </Typography>
        </div>
        <Box
          mt={{ xs: 20, md: 0 }}
          sx={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          <h1>Kontakt</h1>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ContactData>
              <HiPhone />
              {'       '}+48 88465795
            </ContactData>
            <ContactData>
              <HiOutlineMail />
              {'       '}zespolmed@gmail.com
            </ContactData>
          </Box>
          <Form action=''>
            <fieldset>
              <legend>Wyślij nam wiadomość</legend>
              <Input placeholder='Email...' />

              <Textarea placeholder='Wiadomość...' />
              <Submit type='submit'> Wyślij</Submit>
            </fieldset>
          </Form>
        </Box>
      </Box>
      <Gap />
    </Section>
  );
};

export default Work;
