import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import MainFooter from '../components/MainFooter';
import MainHeader from '../components/MainHeader';
import SignUpForm from '../components/SignUpForm';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Video from 'grommet/components/Video';
import Paragraph from 'grommet/components/Paragraph';
import Heading from 'grommet/components/Heading';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Button from 'grommet/components/Button';
import Layer from 'grommet/components/Layer';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import CarouselWidget from '../components/SupplierCarousel';
import FeatureBox from '../components/SupplierFutureBox';

import CheckmarkIcon from 'grommet/components/icons/base/checkmark';




class Detail extends Component {

  componentDidMount() {
    // // pageLoaded('Detail');
    // this.props.dispatch(navEnable(false));
    // this.props.dispatch(loadDashboard());
  }

  componentWillUnmount() {
    // this.props.dispatch(unloadDashboard());
  }

  render() {

    return (
      <Article>
        <MainHeader search="true"></MainHeader>
        <Hero
          background={
            <Image src='/img/slider-2.jpg'
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
                  Get strong, toned and happy in just 4 weeks
                  </Heading>
                <Heading tag="h2">
                  Fresh + fast 20min dance workout simple meal plans and of an exclusive community
                  </Heading>
              </Box>
              <Box direction='row'
                justify='center'
                margin={{ "bottom": "large" }}
                flex={true}
              >
                <Button
                  box={true}
                  pad="medium"
                  margin="small"
                  full={false}
                  label='Start Now!'
                  href='#'
                  primary={true} />
                <Button
                  className="download_button"
                  box={true}
                  margin="small"
                  pad="medium"
                  full={false}
                  label='Download free content'
                  href='https://myhealthybalance.com.au/assets/ex-phys-guides/beginner_final_lowres.pdf'
                  secondary={true}/>
              </Box>
            </Box>
          </Box>
        </Hero>
        <Section className="bkd-nude">
          <Box>
            <Heading align="center" margin="small">
              How it works
            </Heading>  
          </Box>
          <FeatureBox feed="supplier-keypoint.1"/>
        </Section>
        <Section>
          <CarouselWidget title="Food"  feed="food-carousel"/>
        </Section>
        {/* <CarouselWidget title="Workout"  feed="carousel.1" /> */}
        {/* <CarouselWidget title="Testimonies"  feed="carousel.1" /> */}
        <MainFooter></MainFooter>
      </Article>
    );
  }
}

Detail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  tasks: PropTypes.arrayOf(PropTypes.object)
};

Detail.contextTypes = {
  intl: PropTypes.object
};

const select = state => ({ ...state.detail });

export default connect(select)(Detail);
