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

import Anchor from 'grommet/components/Anchor';

class MainHeader extends Component {

  constructor() {
    super();
    this._onLogout = this._onLogout.bind(this);
    this.state = { what: '', when: '', where: '' };
  }

  _onLogout(event) {
    const { session } = this.props;
    event.preventDefault();
    this.props.dispatch(logout(session));
    const title = this.props.title;

  }

  render() {
    let search = () => {
      if (this.props.search) {
        return (
          <Box direction='row'
            justify='center'
            alignContent="center"
            flex={true}
            size="small"
          >
            <Select placeHolder='What?'
              value={this.state.what}
              options={['Food', 'Fitness', 'Mindfulness', 'Food + Fitness', 'Food + Mindfulness', 'Fitness + Mindfulless', 'Meal Delivery Services', 'Fitness + Food + Mindfullness']}
              onChange={p => { this.setState({ what: p.option }) }}
            />
            <Select placeHolder='Where?'
              value={this.state.where}
              options={['Gym', 'Home', 'Pool', 'Track', 'Yacht', 'Rage Room']}
              onChange={p => { this.setState({ where: p.option }) }}
            />
            <Select placeHolder='When?'
              value={this.state.when}
              options={['One-off-session', '1 week', '1 month', '8 weeks', '12 weeks', 'Ongoing']}
              onChange={p => { this.setState({ when: p.option }) }}
            />
            <Button icon={<SearchIcon />}
              href='/category'
              className="new-programs no-border-icon"
              primary={true}
            />
          </Box>
        )
      }
      else return '';
    }
    return (
      <Header
        direction='row'
        align="center"
        justify="between"
      >
        <Box
          align="start"
          margin='medium'
          justify='start'
        >
          <Anchor href="/home">
            <Image size="small" src='/img/logo3.jpg' href="/home"></Image>
          </Anchor>
        </Box>

        {search()}
        {/* style={{ "backgroundColor": "#127a79" }} */}

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
