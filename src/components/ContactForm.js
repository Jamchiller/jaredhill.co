import React from 'react';
import fetch from 'unfetch';
import { withStateHandlers } from 'recompose';

import { Form, InputWrapper, Label, Input, TextArea, Row } from './Form';
import { Button } from './Button';

const SubmitButton = ({ error, loading, sent, children, ...restProps }) => (
  <Button disabled={sent} {...restProps}>
    {(error && 'Error') ||
      (sent && 'Sent') ||
      (loading && 'Loading...') ||
      children}
  </Button>
);

const ContactForm = ({
  name,
  email,
  body,
  loading,
  error,
  sent,
  handleChange,
  setLoading,
  setEmpty,
  setError,
}) => (
  <Form
    onSubmit={e => {
      e.preventDefault();
      setLoading();
      submitData(e, name, email, body)
        .then(response => {
          console.log(response);
          setEmpty();
        })
        .catch(err => {
          console.error('The error: ', err);
          setError();
        });
    }}
  >
    <p>
      Whether you want to hire me, collaborate, send me a love letter or just
      get something off your chest, I’d love to hear from you. Use the form
      below and I’ll get back to you as soon as I can.
    </p>
    <InputWrapper>
      <Input
        name="name"
        id="name"
        type="text"
        autocomplete="name"
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
        type="email"
        autocomplete="email"
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
      <SubmitButton
        width={[1, 'auto']}
        mx={'auto'}
        type="submit"
        loading={loading}
        sent={sent}
        error={error}
      >
        Send now
      </SubmitButton>
      <p>Alternatively, you can email me at hi@jaredhill.co</p>
    </Row>
  </Form>
);

const submitData = (e, name, email, body) => {
  console.log('submitting...');
  const data = {
    name: name,
    replyTo: email,
    body: body,
  };
  return fetch('https://micro-mailer.now.sh/jared', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(data),
  })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log('erroring');
      return err;
    });
};

const withForm = withStateHandlers(
  ({
    name = '',
    email = '',
    body = '',
    loading = false,
    error = false,
    sent = false,
  }) => ({
    name,
    email,
    body,
    loading,
    error,
    sent,
  }),
  {
    handleChange: state => e => ({ [e.target.name]: e.target.value }),
    setEmpty: state => () => ({
      name: '',
      email: '',
      body: '',
      loading: false,
      sent: true,
    }),
    setLoading: ({ loading }) => () => ({ loading: true }),
    setError: ({ error }) => () => ({ error: true }),
  }
);

export default withForm(ContactForm);
