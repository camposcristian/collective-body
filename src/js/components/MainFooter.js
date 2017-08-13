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
      <Footer justify='center' direction="column">
        <Columns maxCount={2} justify="center" size="large">
          <Box
            align="center"
            justify="center"
          >
            <Heading>
              Share the love
             </Heading>
            <Box direction='row'
              justify='center'
              align="center"
            >
              <SocialShare type='facebook'
                link='https://grommet.io' />
              <SocialShare type='twitter'
                link='https://grommet.io' />
              <SocialShare type='google'
                link='https://grommet.io' />
            </Box>
          </Box>
          <Box
            flex={true}
            align="center"
            justify="center"
          >
            <Heading>
              Find the love
            </Heading>
            <TextInput id='item1'
              name='item-1'
              value='' />
          </Box>
        </Columns>
        <Box
          direction="column"
          >
          <Box align='center'
            pad="medium">
            <Box
              direction="row"
              align='center'
              textAlign='center'
            >
              <Anchor label='Terms and Conditions' href='#' />
              |
            <Anchor label='Privacy Information' href='#' />
              |
            <Anchor label='Cookie Policy' href='#' />
            </Box>
            <Image src='/img/logo3.jpg'></Image>
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
