import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setSort } from './questionsReducer';

const mapStateToProps = (state) => ({
  questions: state.getIn(['questions', 'questions']),
  answers: state.getIn(['questions', 'answers']),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSort,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps);
