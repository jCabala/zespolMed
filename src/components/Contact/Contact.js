import { Section, Divider, Gap } from '../globalStyles/Global.styled';
import { Box } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import { HiMusicNote, HiOutlineMail, HiPhone } from 'react-icons/hi';
import { Form, Input, Textarea, Submit, ContactData } from './Contact.styled';
import emailjs from 'emailjs-com';

const Conntact = () => {
  const [send, setSend] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    if (send === true) {
      setTimeout(() => {
        setSend(false);
      }, 2000);
    }
  }, [send]);

  const handleSumbit = async e => {
    e.preventDefault();

    // try {
    //   const res = await emailjs.sendForm(
    //     'service_tnt9rmb',
    //     'template_zawbroa',
    //     formRef.current,
    //     'user_XuX8KdjO5cQkAVLdudOWo'
    //   );

    //   console.log(res.text);
    // } catch (err) {
    //   console.log(err.message);
    // }

    e.target.reset();
    setSend(true);
  };

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
      <Form ref={formRef} onSubmit={handleSumbit}>
        <fieldset>
          {send ? (
            <>
              <HiMusicNote size='10rem' color='white' />
            </>
          ) : (
            <>
              <legend>Wyślij nam wiadomość</legend>
              <Input
                placeholder='Email...'
                type='email'
                name='from_name'
                required
              />

              <Textarea placeholder='Wiadomość...' name='message' required />
              <Submit type='submit'> Wyślij</Submit>
            </>
          )}
        </fieldset>
      </Form>

      <Gap />
    </Section>
  );
};

export default Conntact;
