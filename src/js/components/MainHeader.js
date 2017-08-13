import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from 'grommet/components/Header';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Tip from 'grommet/components/Tip';
import Columns from 'grommet/components/Columns';
import Heading from 'grommet/components/Heading';
import SocialShare from 'grommet/components/SocialShare';
import TextInput from 'grommet/components/TextInput';
import Select from 'grommet/components/Select';

import Actions from 'grommet/components/icons/base/Actions';
import SearchIcon from 'grommet/components/icons/base/Search';
import Halt from 'grommet/components/icons/base/Halt';
import FavoriteIcon from 'grommet/components/icons/base/Favorite';

class MainHeader extends Component {

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
      <Header
        direction='row'
        align="center"
        justify="between"
      >
        {/* style={{ "backgroundColor": "#127a79" }} */}
        <Box
          align="start"
          margin='small'
          justify='start'>
          <Image size="small" src='/img/logo3.jpg'></Image>
        </Box>
        <Box
          margin='small'
          direction='row'
          align="end"
          justify='end'
        >
          <Button icon={<FavoriteIcon style={{ fill: "red" }} />}
            href='#'
            className="no-border-icon"
            secondary={true}
            style={{ border: "1px solid rgba(0,0,0,0.15)" }}

          />
          {/* <Tip target='new-programs'
            onClose={function () { return true }}
          >
            New Programs
          </Tip> */}
          <Select placeHolder='AUD'
            multiple={true}
            inline={false}
            options={['USD', 'Euros']}
            value={'AUD'}
          />
          <Select placeHolder='My Account'
            multiple={true}
            inline={false}
            options={['My Profile', 'Sign out']}
            value={'My Account'}
          />
        </Box>
      </Header>
    );
  }

}
const select = state => ({
  nav: state.nav
});


export default connect(select)(MainHeader);
