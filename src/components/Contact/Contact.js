import { Section, Divider, Gap } from '../globalStyles/Global.styled';
import { Box, Typography } from '@mui/material';
import { HiMusicNote, HiOutlineMail, HiPhone } from 'react-icons/hi';
import { Form, Input, Textarea, Submit, ContactData } from './Contact.styled';

const Work = () => {
  return (
    <Section>
      <h1>Kontakt</h1>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        flexDirection={{ xs: 'column', md: 'row' }}
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

      <Gap />
    </Section>
  );
};

export default Work;
