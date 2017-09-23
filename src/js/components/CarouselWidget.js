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
import Animate from 'grommet/components/Animate';
import Anchor from 'grommet/components/Anchor';
import Label from 'grommet/components/Label';
import PreviousIcon from 'grommet/components/icons/base/Previous';
import NextIcon from 'grommet/components/icons/base/Next';
import StarIcon from 'grommet/components/icons/base/Star';

import HighFiveIcon from '../components/HighFiveIcon';



import { navActivate } from '../actions/nav';
import fire from '../actions/firebase';

class BoxTile extends React.Component {
  render() {
    let post = this.props.item;
    return (
      <Animate
        enter={{ animation: 'fade', duration: 1000, delay: 50 }}
        leave={{ animation: 'fade', duration: 1000, delay: 0 }}
      >
        <Box
          pad="small"
          //style={{ "display": post.display }}
        >
          <Anchor href='/Detail' style={{ textDecoration: "none" }}>
            <Image className="carousel-image" src={post.picture}></Image>
            <Box
              direction="column">
              <Box direction='row'
                style={{ "height": "105px", "minWidth": "200px", "overflow": "hidden" }}
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
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <span style={{ marginLeft: "10px" }}>30 reviews</span>
              </Box>
            </Box>
          </Anchor>
        </Box >
      </Animate>
    );
  }
}


class CarouselWidget extends Component {
  constructor() {
    super();
    this.handleCarouselClick = this.handleCarouselClick.bind(this);
    this.state = {
      tiles: [1, 2, 3, 4],
      position: 0
    };
  }

  handleCarouselClick(direction) {
    let items = this.state.data;
    let position = this.state.position;
    const { tiles } = this.state;
    switch (direction) {
      case 'next':
        tiles.splice(0, 1);
        if (position < 0) {
          position = position + 12;
        }
        if (position !== 11) {
          position++;
          tiles.push(items[position]);
        }
        else {
          tiles.push(items[0]);
          position = 0;
        }
        // tiles.map((tile, index) => {
        //   if (index == position - 3) {
        //     tile.display = "none";
        //   }
        //   else if (index == position + 1) {
        //     tile.display = "block";
        //   }
        //   return tile;
        // })
        // position++;
        return this.setState({
          tiles: tiles,
          position: position
        });
      case 'previous':
        tiles.pop();
        if (position > 3) {
          tiles.splice(0, 0, items[position - 4])
          position--;
        }
        else {
          tiles.splice(0, 0, items[position + 8])
          if (position === -8) {
            position = 4;
          }
          position--;
        }
        return this.setState({
          tiles: tiles.map(tile => tile),
          position: position
        })
    }
  }
  _getData() {
    var feedName = this.props.feed;
    var promises = [];
    var items = [];
    var storageRef = fire.storage().ref(`Carousels/${this.props.feed}.json`);
    promises.push(storageRef.getDownloadURL().then(url => {
      fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(json => {
          json.map((item, index) => {
            var storageRef = fire.storage().ref(`Images/Carousels/${feedName}/${index + 1}.jpg`);
            promises.push(storageRef.getDownloadURL().then(url => {
              item.picture = url;
              items.push(item);
            }))
          })
          Promise.all(promises).then(() => {
            // items = items.map((item, index) => {
            //   item.title = index;
            //   return item;
            // });
            this.setState({
              data: items,
              tiles: items.slice(0, 4),
              // map((item, index) => {
              //   (index < 4 ? item.display = "block" : item.display = "none")
              //   return item;
              // }
              // ),
              position: 3,
            });
          });
        })
    }));
  }
  // _getData() {
  //   var url = `feeds/${this.props.feed}.json`;
  //   fetch(url, { method: 'GET' })
  //     .then(response => response.json())
  //     .then(json => {
  //       this.setState({
  //         data: json
  //       });
  //     });
  // }

  componentDidMount() {
    this._getData();
  }

  render() {
    const title = this.props.title;
    let canvases = [];


    // debugger;
    return (
      <Box pad='medium' >
        <Heading margin="large">
          {title}
        </Heading>
        <Box
          direction='row'
          justify="start"
          full={true}
          flex
          style={{ "overflow": "hidden" }}
          className="carousel-tiles"
        >
          <PreviousIcon className="carousel-prev" onClick={this.handleCarouselClick.bind(this, 'previous')} />
          {
            this.state.tiles.length !== 0 ?
              (
                this.state.tiles.map((item, index) =>
                  <BoxTile
                    key={`tile-${index}`}
                    item={item}
                  />
                )
              ) : ""
          }
          <NextIcon className="carousel-next" onClick={this.handleCarouselClick.bind(this, 'next')} />
        </Box >
      </Box >
    )
  }
}

CarouselWidget.propTypes = {
  dispatch: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default connect()(CarouselWidget);
