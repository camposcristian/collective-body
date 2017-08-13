import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import MainFooter from '../components/MainFooter';
import MainHeader from '../components/MainHeader';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';


import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Split from 'grommet/components/Split';
import Card from 'grommet/components/Card';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Paragraph from 'grommet/components/Paragraph';
import Markdown from 'grommet/components/Markdown';






class Category extends Component {

  _getData() {

    const options = {
      method: 'GET'
    }
    fetch(`/feeds/categories.json`, options)
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
      canvases = this.state.data.map(function (data, index) {
        return (
          <Tile key={index} margin="large"
          >
            <Card thumbnail={data.picture}
              wrap={true}
              label={data.title} contentPad="none"
              description={<Markdown components={{
                "p": { "props": { "margin": "small" } }
              }}
                content={data.description} />}
            />
          </Tile>
        )
      });
    }

    return (
      <Article >
        <MainHeader></MainHeader>
        <Section>
          <Split fixed={false}
            flex='right'>
            <Sidebar full="true">
              <Header pad='medium'
                justify='between'>
                <Title>
                  Filter by
                </Title>
              </Header>
              <Accordion openMulti={true}>
                <AccordionPanel pad="medium" heading='How?'>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     </Paragraph>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='What'>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='Where?'>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='Why?'>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='With?'>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='When?'>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='How long?'>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='Workout Duration'>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='High Five Rating'>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='Food'>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='Session Type'>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>
                </AccordionPanel >
              </Accordion>
            </Sidebar>
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
          </Split>
        </Section>
        <MainFooter></MainFooter>
      </Article >
    );
  }
}

Category.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  tasks: PropTypes.arrayOf(PropTypes.object)
};

Category.contextTypes = {
  intl: PropTypes.object
};

const select = state => ({ ...state.category });

export default connect(select)(Category);
