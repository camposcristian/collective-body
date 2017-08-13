import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Button from 'grommet/components/Button';
import Title from 'grommet/components/Title';
import Tile from 'grommet/components/Tile';
import Tiles from 'grommet/components/Tiles';
import Card from 'grommet/components/Card';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Anchor from 'grommet/components/Anchor';
import Label from 'grommet/components/Label';
import Paragraph from 'grommet/components/Paragraph';
import Markdown from 'grommet/components/Markdown';
import LineChartIcon from 'grommet/components/icons/base/LineChart';






import { navActivate } from '../actions/nav';

class FeatureBox extends Component {

  _getData() {

    const options = {
      method: 'GET'
    }
    fetch(`/feeds/${this.props.feed}.json`, options)
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
    let canvases = [];

    if (this.state !== null) {

      canvases = this.state.data.map(function (data, index) {
        return (
          <Tile key={index} 
          basis="1/3"
          pad="medium"
          >
            <LineChartIcon size="xlarge"/>
            <Title margin="small">{data.title} </Title>
            <Markdown content={data.text} />
          </Tile>
        )
      });
    }
    return (
      <Box pad='medium'
        direction="row"

      >
        <Tiles
        flush={true}
        >
            {canvases}
        </Tiles>
      </Box >
    );

  }
}

FeatureBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(FeatureBox);
