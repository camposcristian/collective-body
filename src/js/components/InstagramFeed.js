import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import Carousel from 'grommet/components/Carousel';
import Tile from 'grommet/components/Tile';
import Tiles from 'grommet/components/Tiles';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Headline from 'grommet/components/Headline';
import Anchor from 'grommet/components/Anchor';



class InstagramFeed extends Component {

  constructor(props) {
    super(props);
    // this.state.
  }

  _getData() {

    const options = {
      method: 'GET'
    }
    fetch(`/feeds/${this.props.feed}.json`, options)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json.data
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
        const ix = Math.floor(i / 3);
        if (!ar[ix]) {
          ar[ix] = [];
        }
        ar[ix].push(it);
        return ar;
      }, []);

      canvases = this.state.data.slice(0, 7).map(function (data, index) {
        return (
          <Anchor key={data.id} href={data.link}>
            <Tile  style={{ position: "relative" }} className="instagram-feed" >
              <Box className="instagram-box">
                <Box className="instagram-center">
                  <Heading strong={true} tag="h3">{data.likes.count} likes</Heading>
                  <Paragraph>{data.caption ? data.caption.text : ''}</Paragraph>
                </Box>
              </Box>
              <Image size="small" src={data.images.standard_resolution.url} />
            </Tile>
          </Anchor>
        )
      });
    }

    return (
      <Box pad='medium'>
        <Heading>
          {title}
        </Heading>
        <Box
          justify='center'
          align='center'>
          <Tiles
            flush={true}
            fill={true}
            size="small"
            margin="none"
          >
            {canvases}
          </Tiles>
        </Box>
      </Box >
    );
  }
}

InstagramFeed.propTypes = {
  title: PropTypes.string.isRequired,
};

// const select = state => ({ ...state.home });

export default connect()(InstagramFeed);

