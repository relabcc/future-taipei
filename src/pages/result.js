import React, { PureComponent } from 'react';
import DonutChart from 'react-donut-chart';
import map from 'lodash/map';

import Container from '../components/Container';
import Text from '../components/Text';
import Box from '../components/Box';

import withQuestions from '../stores/withQuestions';

import topics from '../topics';

class Result extends PureComponent {
  static getDerivedStateFromProps(nextProps) {
    return {
      scores: nextProps.answers.reduce((scores, group) => {
        group.forEach((key, index) => {
          scores[key] = scores[key] || 0;
          scores[key] += 3 - index;
        });
        return scores;
      }, {}),
    };
  }

  state = {}

  render() {
    const { scores } = this.state;
    return (
      <Container py="2em">
        <Text.h1>你的結果</Text.h1>
        <Box>
          <DonutChart
          data={map(scores, (value, key) => ({
            label: topics[key].title,
            value,
          }))}
          />
        </Box>
      </Container>
    );
  }
}

export default withQuestions(Result);
