import React from 'react';
import Layout from '../containers/Layout';

export default (SubComp) => (props) => (
  <Layout>
    <SubComp {...props} />
  </Layout>
);
