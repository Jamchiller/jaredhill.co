import React from 'react';
import Title from './Title';
import Card from './Card';
import { Form, FormRow, LabelWrapper, Label, Input, TextArea } from './Form';

export default ({ title, label }) => (
  <section aria-label={!title && label}>
    {title && <Title size={[2, 3]}>{title}</Title>}
    <Card flexDirection={'column'} mx={'auto'} p={[2, 3]}>
      <Form>
        <FormRow>
          <Input name="name" id="name" type="text" required />
          <LabelWrapper>
            <Label for="name">Name</Label>
          </LabelWrapper>
        </FormRow>
        <FormRow>
          <Input name="email" id="email" type="text" required />
          <LabelWrapper>
            <Label for="email">Email</Label>
          </LabelWrapper>
        </FormRow>
        <FormRow>
          <TextArea name="email" id="email" rows="1" required />
          <LabelWrapper>
            <Label for="email">Message</Label>
          </LabelWrapper>
        </FormRow>
      </Form>
    </Card>
  </section>
);
