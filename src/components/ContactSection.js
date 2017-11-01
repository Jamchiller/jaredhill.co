import React from 'react';
import fetch from 'unfetch';
import { withStateHandlers } from 'recompose';

import Title from './Title';
import Card from './Card';
import { Form, FormRow, InputWrapper, Label, Input, TextArea } from './Form';
import Button from './Button';

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
  <section aria-label={!title && label}>
    {title && <Title>{title}</Title>}
    <Card flexDirection={'column'} mx={'auto'} px={[2, 3]} py={3}>
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
        <FormRow>
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
        </FormRow>
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
        <Button
          width={[1, 'auto']}
          ml={[0, 'auto']}
          px={2}
          py={1}
          type="submit"
        >
          {loading ? 'Loading' : 'Submit'}
        </Button>
      </Form>
    </Card>
  </section>
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
