import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Form from 'grommet/components/Form';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import FormFields from 'grommet/components/FormFields';
import Button from 'grommet/components/Button';
import CheckBox from 'grommet/components/CheckBox';
import TextInput from 'grommet/components/TextInput';



class SignUpForm extends Component {

  constructor() {
    super();
    this._onLogout = this._onLogout.bind(this);
  }

  _onLogout(event) {
    const { session } = this.props;
    event.preventDefault();
    this.props.dispatch(logout(session));
  }

  render() {
    return (
      <Form align="center">
        <Header>
          <Heading pad="medium">
            Sign up Now
          </Heading>
        </Header>
        <FormFields>
          <Box direction='column' margin="medium">
            <TextInput value="Name"></TextInput>
            <TextInput value="E-mail" type="e-mail"></TextInput>
            <Box direction='row' margin="medium">
              <CheckBox style={{ "marginRight": "0" }} label='I agree to the' /> <Anchor> Terms and Conditions </Anchor>
            </Box>
          </Box>
        </FormFields>
        <Footer pad="medium"
          alignSelf="center"
          align="center"
        >
          <Button
            label='Submit'
            type='submit'
            primary={true} />
        </Footer>
      </Form>
    );
  }

}
const select = state => ({
  nav: state.nav
});


export default connect(select)(SignUpForm);
