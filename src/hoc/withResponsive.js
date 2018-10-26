import { connect } from 'react-redux';

export default (WrappedComp) => connect((state) => ({ browser: state.get('browser') }))(WrappedComp);
