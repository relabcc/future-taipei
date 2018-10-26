import React, { PureComponent } from 'react';

import withQuestions from '../stores/withQuestions';

class Result extends PureComponent {
  render() {
    const { answers } = this.props;
    console.log(answers.toJS());
    return (
      <div>

      </div>
    );
  }
}

export default withQuestions(Result);
