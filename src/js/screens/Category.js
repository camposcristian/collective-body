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

import CheckBox from 'grommet/components/Checkbox';
import Heading from 'grommet/components/Heading';





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
                  <CheckBox id='how_online'
                  name='how_online'
                  label='Online'/>
                  <CheckBox id='how_ondemand'
                  name='how_ondemand'
                  label='On-demand'/>
                  <CheckBox id='how_live'
                  name='how_live'
                  label='Live'/>
                  <CheckBox id='how_ongoing'
                  name='how_ongoing'
                  label='Ongoing'/>
                  <CheckBox id='how_face'
                  name='how_face'
                  label='Face-to-face'/>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='What'>
                  <CheckBox id='what_'
                  name='what_'
                  label='Food'/>
                  <CheckBox id='what_'
                  name='what_'
                  label='Fitness'/>
                  <CheckBox id='what_'
                  name='what_'
                  label='Mindfulness'/>
                  <CheckBox id='what_'
                  name='what_'
                  label='Food + Fitness'/>
                  <CheckBox id='what_'
                  name='what_'
                  label='Food + Mindfulness'/>
                  <CheckBox id='what_'
                  name='what_'
                  label='Fitness + Mindfulness'/>
                  <CheckBox id='what_'
                  name='what_'
                  label='Meal Delivery Services'/>
                  <CheckBox id='what_'
                  name='what_'
                  label='Fitness + Food + Mindfulness'/>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='Where?'>
                  <CheckBox id=''
                    name=''
                    label='Gym'/>
                  <CheckBox id=''
                    name=''
                    label='Home'/>
                  <CheckBox id=''
                    name=''
                    label='Pool'/>
                  <CheckBox id=''
                    name=''
                    label='Track'/>
                  <CheckBox id=''
                    name=''
                    label='Yacht'/>
                  <CheckBox id=''
                    name=''
                    label='Rage Room'/>
                  <CheckBox id=''
                    name=''
                    label='Beach'/>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='Why?'>
                  <CheckBox id=''
                  name=''
                  label='Weight Loss'/>
                  <CheckBox id=''
                  name=''
                  label='Maintenance'/>
                  <CheckBox id=''
                  name=''
                  label='Strength'/>
                  <CheckBox id=''
                  name=''
                  label='Agility'/>
                  <CheckBox id=''
                  name=''
                  label='Mindfulness'/>
                  <CheckBox id=''
                  name=''
                  label='Flexibility'/>
                  <CheckBox id=''
                  name=''
                  label='Minimalism'/>
                  <CheckBox id=''
                  name=''
                  label='Goal Setting'/>
                  <CheckBox id=''
                  name=''
                  label='Self-care rituals'/>
                  <CheckBox id=''
                  name=''
                  label='Self-love'/>
                  <CheckBox id=''
                  name=''
                  label='Healing'/>
                  <CheckBox id=''
                  name=''
                  label='Work-life balance'/>
                  <CheckBox id=''
                  name=''
                  label='Certificate / Acreditation Courses'/>
                  <CheckBox id=''
                  name=''
                  label='Post Baby'/>
                  <CheckBox id=''
                  name=''
                  label='Prenatal'/>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='With?'>
                  <CheckBox id=''
                    name=''
                    label='Weights'/>
                  <CheckBox id=''
                    name=''
                    label='Bodyweight'/>
                  <CheckBox id=''
                    name=''
                    label='Buddy Bodyweight'/>
                  <CheckBox id=''
                    name=''
                    label='No Equipment'/>
                  <CheckBox id=''
                    name=''
                    label='Nature'/>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='When?'>
                  <CheckBox id=''
                  name=''
                  label='Immediately / Starting Now'/>
                  <CheckBox id=''
                  name=''
                  label='Start of Month / Next Month'/>
                  <CheckBox id=''
                  name=''
                  label='Start of Week / Next Monday'/>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='How long?'>
                  <CheckBox id=''
                  name=''
                  label='One-off-session'/>
                  <CheckBox id=''
                  name=''
                  label='1 day'/>
                  <CheckBox id=''
                  name=''
                  label='1 week'/>
                  <CheckBox id=''
                  name=''
                  label='1 month'/>
                  <CheckBox id=''
                  name=''
                  label='8 weeks'/>
                  <CheckBox id=''
                  name=''
                  label='12 weeks'/>
                  <CheckBox id=''
                  name=''
                  label='Ongoing'/>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='Workout Duration'>
                  <CheckBox id=''
                  name=''
                  label='5'/>
                  <CheckBox id=''
                  name=''
                  label='10'/>
                  <CheckBox id=''
                  name=''
                  label='15'/>
                  <CheckBox id=''
                  name=''
                  label='20'/>
                  <CheckBox id=''
                  name=''
                  label='30'/>
                  <CheckBox id=''
                  name=''
                  label='45'/>
                  <CheckBox id=''
                  name=''
                  label='60'/>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='High Five Rating'>
                  <CheckBox id=''
                  name=''
                  label='1'/>
                  <CheckBox id=''
                  name=''
                  label='2'/>
                  <CheckBox id=''
                  name=''
                  label='3'/>
                  <CheckBox id=''
                  name=''
                  label='4'/>
                  <CheckBox id=''
                  name=''
                  label='5'/>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='Food'>
                  <CheckBox id=''
                    name=''
                    label='Vegetarian'/>
                  <CheckBox id=''
                    name=''
                    label='Gluten Free'/>
                  <CheckBox id=''
                    name=''
                    label='Regular'/>
                  <CheckBox id=''
                    name=''
                    label='Paleo'/>
                  <CheckBox id=''
                    name=''
                    label='Vegan'/>
                  <CheckBox id=''
                    name=''
                    label='Pescetarian'/>
                </AccordionPanel >
                <AccordionPanel pad="medium" heading='Session Type'>
                <Heading tag='h4'>Dance</Heading>
                  <CheckBox id=''
                    name=''
                    label='Latin'/>
                  <CheckBox id=''
                    name=''
                    label='Tap'/>
                  <CheckBox id=''
                    name=''
                    label='Brazilian Capoeira'/>
                  <CheckBox id=''
                    name=''
                    label='Cardio Barre'/>
                  <CheckBox id=''
                    name=''
                    label='Jazz Dance'/>
                  <CheckBox id=''
                    name=''
                    label='Pole Dance'/>
                  <CheckBox id=''
                    name=''
                    label='Hip Hop Dance'/>
                  <CheckBox id=''
                    name=''
                    label='Ballet Dance'/>
                  <CheckBox id=''
                    name=''
                    label='Zumba Dance'/>
                  <CheckBox id=''
                    name=''
                    label='Latin Dance'/>
                  <CheckBox id=''
                    name=''
                    label='Cardio Dance'/>
                  {/* <Heading tag='h4'>Prenatal</Heading>   */}
                  <Heading tag='h4'>Pilates</Heading>  
                  <CheckBox id=''
                    name=''
                    label='Mat Pilates'/>
                  <CheckBox id=''
                    name=''
                    label='Reformer Pilates'/>
                  <CheckBox id=''
                    name=''
                    label='Tower Pilates'/>
                  <Heading tag='h4'>Stretch</Heading> 
                  <CheckBox id=''
                    name=''
                    label='Ashtanga Yoga'/>
                  <CheckBox id=''
                    name=''
                    label='Hatha Yoga'/>
                  <CheckBox id=''
                    name=''
                    label='Bikram Yoga'/>
                  <CheckBox id=''
                    name=''
                    label='Hot Yoga'/>
                  <CheckBox id=''
                    name=''
                    label='Iyengar Yoga'/>
                  <CheckBox id=''
                    name=''
                    label='Kundalini Yoga'/>
                  <CheckBox id=''
                    name=''
                    label='Power Yoga'/>
                  <CheckBox id=''
                    name=''
                    label='Prenatal Yoga'/>
                  <CheckBox id=''
                    name=''
                    label='Tantra Yoga'/>
                  <CheckBox id=''
                    name=''
                    label='Vinyasa Yoga'/>
                  <CheckBox id=''
                    name=''
                    label='Yin Yoga'/>
                  <CheckBox id=''
                    name=''
                    label='Yogalates'/>
                  <CheckBox id=''
                    name=''
                    label='Meditation Yoga'/>
                  <CheckBox id=''
                    name=''
                    label='Yoga Nidra'/>
                  <CheckBox id=''
                    name=''
                    label='Strength'/>
                  <CheckBox id=''
                    name=''
                    label='Trx'/>
                  <CheckBox id=''
                    name=''
                    label='Bootcamp'/>
                  <CheckBox id=''
                    name=''
                    label='HIIT'/>
                  <CheckBox id=''
                    name=''
                    label='CrossFit'/>
                  <CheckBox id=''
                    name=''
                    label='Weightlifting'/>
                  <CheckBox id=''
                    name=''
                    label='Olympic Lifting'/>
                  <CheckBox id=''
                    name=''
                    label='Tabata'/>
                  <CheckBox id=''
                    name=''
                    label='Kettlebell'/>
                  <CheckBox id=''
                    name=''
                    label='Functional'/>
                  <Heading tag='h4'>Martial Arts</Heading>  
                  <CheckBox id=''
                    name=''
                    label='Tai Chi'/>
                  <CheckBox id=''
                    name=''
                    label='Muay Thai'/>
                    Boxing
                  <CheckBox id=''
                    name=''
                    label='Kick boxing'/>
                  <CheckBox id=''
                    name=''
                    label='Bag work'/>
                  <CheckBox id=''
                    name=''
                    label='Cardio boxing'/>
                  <Heading tag='h4'>Running</Heading>  
                  <CheckBox id=''
                    name=''
                    label='Deep water running'/>
                  <Heading tag='h4'>Outdoors</Heading>  
                  <CheckBox id=''
                    name=''
                    label='Spin'/>
                  <CheckBox id=''
                    name=''
                    label='RPM'/>

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
