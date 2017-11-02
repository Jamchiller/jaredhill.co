import React from 'react';
import fetch from 'unfetch';
import { withStateHandlers } from 'recompose';

import { Section, Container, Content } from './Section';
import Title from './Title';
// import Card from './Card';
import { Form, InputWrapper, Label, Input, TextArea, Row } from './Form';
import { Button } from './Button';

const ContactSection = ({
  title,
  label,
  name,
  email,
  body,
  loading,
  handleChange,
  setLoading,
  setEmpty,
}) => (
  <Section>
    <Title>{title}</Title>
    <Container>
      <Content>
        <Form
          onSubmit={e => {
            e.preventDefault();
            setLoading();
            submitData(e, name, email, body).then(response => {
              console.log(response);
              setEmpty();
            });
          }}
        >
          <InputWrapper>
            <Input
              name="name"
              id="name"
              type="text"
              required
              value={name}
              onChange={e => handleChange(e)}
            />
            <Label for="name">Name</Label>
          </InputWrapper>
          <InputWrapper>
            <Input
              name="email"
              id="email"
              type="text"
              required
              value={email}
              onChange={e => handleChange(e)}
            />
            <Label for="email">Email</Label>
          </InputWrapper>
          <InputWrapper>
            <TextArea
              name="body"
              id="body"
              rows="5"
              required
              value={body}
              onChange={e => handleChange(e)}
            />
            <Label for="body">Your message</Label>
          </InputWrapper>
          <Row>
            <Button width={[1, 'auto']} mx={'auto'} type="submit">
              {loading ? 'Loading' : 'Send now'}
            </Button>
            <p>Or if you’d like, send me an email at hill.jaredm@gmail.com</p>
          </Row>
        </Form>
      </Content>
    </Container>
  </Section>
);

const submitData = (e, name, email, body) => {
  console.log('submitting...');
  const data = {
    name: name,
    replyTo: email,
    body: body,
  };
  return fetch('https://micro-mailer.now.sh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(data),
  }).then(res => {
    return res;
  });
};

const withForm = withStateHandlers(
  ({ name = '', email = '', body = '', loading = false }) => ({
    name,
    email,
    body,
    loading,
  }),
  {
    handleChange: state => e => ({ [e.target.name]: e.target.value }),
    setEmpty: state => () => ({ name: '', email: '', body: '' }),
    setLoading: ({ loading }) => () => ({ loading: true }),
  }
);

export default withForm(ContactSection);
