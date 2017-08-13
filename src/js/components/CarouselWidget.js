import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Button from 'grommet/components/Button';
import Title from 'grommet/components/Title';
// import CarouselWithoutCircles from '../components/CarouselWidget';
import Carousel from 'grommet/components/Carousel';
import Tile from 'grommet/components/Tile';
import Tiles from 'grommet/components/Tiles';
import Card from 'grommet/components/Card';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Anchor from 'grommet/components/Anchor';
import Label from 'grommet/components/Label';
import Logo from 'grommet/components/icons/Grommet';
import Star from 'grommet/components/icons/base/Star';
import StarHalf from 'grommet/components/icons/base/StarHalf';

import HighFiveIcon from '../components/HighFiveIcon';



import { navActivate } from '../actions/nav';
import fire from '../actions/firebase';

class CarouselWidget extends Component {

  // _getData() {
  //   var storageRef = fire.storage().ref(`Carousels/${this.props.feed}.json`);
  //   storageRef.getDownloadURL().then(url => {
  //     fetch(url, { method: 'GET' })
  //       .then(response => response.json())
  //       .then(json => {
  //         this.setState({
  //           data: json
  //         });
  //       });
  //   });
  // }
  _getData() {
    var url = `feeds/${this.props.feed}.json`;
    fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json
        });
      });
  }

  componentDidMount() {
    this._getData();
  }

  render() {
    const title = this.props.title;
    let canvases = [];

    if (this.state !== null) {
      var chunks = this.state.data.reduce((ar, it, i) => {
        const ix = Math.floor(i / 4);
        if (!ar[ix]) {
          ar[ix] = [];
        }
        ar[ix].push(it);
        return ar;
      }, []);

      canvases = chunks.map(function (data, index) {
        return (
          data.map(function (post, index) {
            return (
              <Tiles key={index}
                justify="start"
                flush={true}
              >
                <Tile
                  pad="small"
                >
                  <Anchor href='/Detail' style={{ textDecoration: "none" }}>
                    <Image src={post.picture}></Image>
                    <Box
                      direction="column">
                      <Box direction='row'
                        style={{ "height": "80px", "overflow": "hidden" }}
                        pad={{ "horizontal": "small" }}
                        justify="start"
                      >
                        <Headline margin="none" size="small" style={{ fontSize: "26px", marginRight: "10px" }}> {post.description}</Headline>
                        <Box
                          direction="row">
                          <Headline size="small" style={{ "color": "#bf6948", "fontWeight": "bold" }}> {post.price}</Headline>
                        </Box>
                      </Box>
                      <Box direction='row'
                        pad={{ "horizontal": "small" }}
                        justify="start"
                      >
                        <Heading strong={true} tag="h3" size="small" margin="none"> {post.title}</Heading>
                      </Box>
                      <Box direction='row'
                        pad={{ "horizontal": "small" }}
                        justify="start"
                      >
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <span style={{ marginLeft: "10px" }}>30 reviews</span>
                      </Box>
                    </Box>

                    {/* <Anchor href='/Detail' style={{ textDecoration: "none" }} >
                  <Box
                    direction="column"
                  >
                    <Box direction='column'

                    >

                      <Heading tag="h3" size="medium" margin="none"> {post.title} </Heading>
                    </Box>
               */}
                  </Anchor>
                </Tile >
              </Tiles >
            )
          })
        )
      });
    }
    return (
      <Box pad='medium'>
        <Heading margin="large">
          {title}
        </Heading>
        <Carousel>
          {canvases}
        </Carousel>
      </Box >
    );

  }
}

CarouselWidget.propTypes = {
  dispatch: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default connect()(CarouselWidget);
