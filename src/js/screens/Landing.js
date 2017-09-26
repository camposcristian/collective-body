import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Anchor from 'grommet/components/Anchor';
import Video from 'grommet/components/Video';
import Article from 'grommet/components/Article';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Carousel from 'grommet/components/Carousel';
import Header from 'grommet/components/Header';
import Hero from 'grommet/components/Hero';
import Search from 'grommet/components/Search';
import Image from 'grommet/components/Image';
import Section from 'grommet/components/Section';
import Actions from 'grommet/components/icons/base/Actions';
import SearchIcon from 'grommet/components/icons/base/Search';
import Halt from 'grommet/components/icons/base/Halt';
import Heading from 'grommet/components/Heading';
import Tip from 'grommet/components/Tip';
import Footer from 'grommet/components/Footer';
import TextInput from 'grommet/components/TextInput';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import Label from 'grommet/components/Label';
import Select from 'grommet/components/Select';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Notification from 'grommet/components/Notification';
import Paragraph from 'grommet/components/Paragraph';
import Value from 'grommet/components/Value';
import SocialShare from 'grommet/components/SocialShare';
import Meter from 'grommet/components/Meter';
import Spinning from 'grommet/components/icons/Spinning';
import { getMessage } from 'grommet/utils/Intl';
import CarouselWidget from '../components/CarouselWidget';
import InstagramFeed from '../components/InstagramFeed';
import NavControl from '../components/NavControl';
import MainFooter from '../components/MainFooter';
import MainHeader from '../components/MainHeader';
import FeatureBox from '../components/FeatureBox';

import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import CheckBox from 'grommet/components/Checkbox';

// import {
//   loadDashboard, unloadDashboard
// } from '../actions/dashboard';
import { navEnable } from '../actions/nav';
import { headers, buildQuery, processStatus } from 'grommet/utils/Rest';

import { pageLoaded } from './utils';

class Landing extends Component {

  constructor() {
    super();
    this._onSubmit = this._onSubmit.bind(this);
    // this._onChange = this._onChange.bind(this);
    this.state = { what: '', when: '', where: '' };
  }

  componentDidMount() {
    pageLoaded('Landing');
    this.props.dispatch(navEnable(false));
  }


  _onSubmit(fields) {
    const { dispatch } = this.props;
    const { router } = this.context;
    dispatch(login(fields.username, fields.password, () => (
      router.history.push('/Category')
    )));
  }

  onSubmitLandingForm() {
    
  }

  render() {

    return (
      <Article full={true}>
        {/* <Header> */}
        <MainHeader></MainHeader>
        <Section>
          <Hero background={
              <Image src='/img/slider.jpeg'
                size='large'
                fit='cover'
                full={true}
                align={{ "bottom": true }} />
              }
            backgroundColorIndex='dark'
            size='large'>
            <Box direction='row'
              justify="center"
            >
              <Box
                colorIndex='light-1'
                style={{ opacity: 0.8 }}
                direction='column'
                responsive={true}>
                <Box direction='column'
                  justify='center'
                  align='center'
                  margin="small"
                  style={{ opacity: 0.6, color: "black" }}
                >
                  <Heading tag="h2" strong={true}>
                    Become the best version of you, on Collective Body
                  </Heading>
                  <Heading tag="h2">
                    Discover fitness workouts, mindfulness, motivation and diet plans to suit your lifestyle
                  </Heading>
                </Box>
                <Box direction='row'
                  justify='center'
                  margin={{ "bottom": "large" }}
                  flex={true}
                >
                  <Form onSubmit=''>
                    <Heading tag="h4" size="small">
                      Open your mind and inbox to the collective body love
                    </Heading>
                    <FormFields>
                      <fieldset>
                        <FormField label='First Name'>
                          <TextInput id='first_name'
                            name='first_name'/>
                        </FormField>
                        <FormField label='Last Name'>
                          <TextInput id='last_name'
                            name='last_name' />
                        </FormField>
                        <FormField label='Mail'>
                          <TextInput id='mail'
                            name='mail'/>
                        </FormField>
                        <FormField label='Location'>
                          <TextInput id='location'
                            name='location'/>
                        </FormField>
                        <FormField>
                          <CheckBox id='agree'
                            name='agree'
                            label='Subscribe to newsletter' />
                        </FormField>
                      </fieldset>
                      <t />
                    </FormFields>
                    <Footer className="landing-submit" pad={{"vertical": "medium"}}>
                      <Box> 
                        <Button label='Submit'
                          type='submit'
                          id='landing_submit'
                          primary={true}
                          style={{ color: "white", opacity: 1 }} />
                      </Box>
                    </Footer>
                  </Form>
                </Box>
              </Box>
            </Box>
          </Hero>
        </Section>
        <MainFooter></MainFooter>
      </Article >
    );
  }
}

Landing.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  tasks: PropTypes.arrayOf(PropTypes.object)
};

Landing.contextTypes = {
  intl: PropTypes.object
};

const select = state => ({ ...state.home });

export default connect(select)(Landing);
