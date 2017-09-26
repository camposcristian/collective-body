import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Footer from 'grommet/components/Footer';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Paragraph from 'grommet/components/Paragraph';
import Columns from 'grommet/components/Columns';
import Heading from 'grommet/components/Heading';
import SocialShare from 'grommet/components/SocialShare';
import TextInput from 'grommet/components/TextInput';


class MainFooter extends Component {

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
      <Footer direction="column" pad="medium">
        <Columns maxCount={2} justify="start" size="large">
          <Box
            align="start"
            justify="start"
          >
            <Heading tag="h2"
              align="start"
            > 
              Get social! Share the collective body love
            </Heading>
            <Paragraph margin="small">
            Share your workouts, cook-ups, or our trainers top tips with your squad! 
            Get your mates, BFF, or SO involved - those who workout together stay together! 
            #collectivebody #collectivebodylove
            </Paragraph>
             
            
            <Box direction='row'
              justify='center'
              align="center"
            >
              <SocialShare type='facebook'
                link='https://collective-body.firebaseapp.com/' />
              <SocialShare type='twitter'
                link='https://collective-body.firebaseapp.com/' />
              <SocialShare type='google'
                link='https://collective-body.firebaseapp.com/' />
            </Box>
          </Box>
          <Box
            flex={true}
            align="end"
            justify="end"
          >
            <Heading tag='h2' align='end'>
              Open your mind and inbox to the collective body love
            </Heading>
            <Paragraph margin='small' align="end">
              We will only send you game changing info! We will never share your details or spam you, promise!
            </Paragraph>
            
            <TextInput label='Mail'
              id='item1'
              name='item-1'
              value='' />
          </Box>
        </Columns>
        <Box
          direction="column"
          >
          <Box align='center'
            pad="none">
            <Box
              direction="row"
              align='center'
              textAlign='center'
            >
              <Anchor label='Terms and Conditions' href='#' />
              <Box margin="small">
              <Paragraph>|</Paragraph>
              </Box>
              
              <Anchor label='Privacy Information' href='#' />
              <Box margin="small">
              <Paragraph>|</Paragraph>
              </Box>
              <Anchor  label=' Cookie Policy' href='#' />
            </Box>
            <Image src='/img/logo3.jpg' size='small'></Image>
            <Paragraph>
              Copyright © 2017 | All rights reserved
            </Paragraph>
          </Box>
        </Box>
      </Footer>
    );
  }

}
const select = state => ({
  nav: state.nav
});


export default connect(select)(MainFooter);
