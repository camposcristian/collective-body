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

// import {
//   loadDashboard, unloadDashboard
// } from '../actions/dashboard';
import { navEnable } from '../actions/nav';
import { headers, buildQuery, processStatus } from 'grommet/utils/Rest';

import { pageLoaded } from './utils';

class Home extends Component {

  constructor() {
    super();
    this._onSubmit = this._onSubmit.bind(this);
    // this._onChange = this._onChange.bind(this);
    this.state = { what: '', when: '', where: '' };
  }

  componentDidMount() {
    pageLoaded('Home');
    this.props.dispatch(navEnable(false));
  }


  _onSubmit(fields) {
    const { dispatch } = this.props;
    const { router } = this.context;
    dispatch(login(fields.username, fields.password, () => (
      router.history.push('/Category')
    )));
  }

  render() {

    return (
      <Article full={true}>
        {/* <Header> */}
        <MainHeader></MainHeader>
        <Section>
          <Hero background={
            <Carousel>
              <Image src='/img/slider.jpeg'
                size='large'
                fit='cover'
                full={true}
                align={{ "bottom": true }} />
              <Image src='/img/slider-2.jpg'
                size='large'
                align={{ "bottom": true }} />
              <Video autoPlay={true}
                showControls={false}
                loop={true}
                muted={true}
                fit='cover'
                align={{ "top": true }}>
                {/* https://d28gwrkukqy4h7.cloudfront.net/homepage/CodyVideoBanner_v8.mp4 */}
                <source src='https://thefitnessplayground.com.au/wp-content/themes/wptheme/_assets/video/circusfit.mp4'
                  type='video/mp4' />
              </Video>
            </Carousel>}
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
              </Box>
            </Box>
          </Hero>
          <CarouselWidget title="the fitness, healthiness, happiness COLLECTIVE"  feed="carousel.1" />
          <FeatureBox feed="feature1"/>
          <CarouselWidget title="the fitness COLLECTIVE" feed="carousel.2" />
          <FeatureBox feed="feature2"/>
          <CarouselWidget title="the food & fuel COLLECTIVE" feed="carousel.3"/>
          <FeatureBox feed="feature3"/>
          <CarouselWidget title="the delivered diets COLLECTIVE" feed="carousel.4" />
          {/* <CarouselWidget title="the mindfulness & mentor COLLECTIVE" feed="carousel.5" /> */}
          <InstagramFeed title="Collective Bodies" feed="collectivebody" />
          <InstagramFeed title="Collective Body-love..." feed="collectivebodylove" />
        </Section>
        <MainFooter></MainFooter>
      </Article >
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  tasks: PropTypes.arrayOf(PropTypes.object)
};

Home.contextTypes = {
  intl: PropTypes.object
};

const select = state => ({ ...state.home });

export default connect(select)(Home);
