/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const range = require('lodash/range');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const count = 4;
  return Promise.all(range(count).map((i) => {
    const id = i + 1;
    return createPage({
      path: `q/${id}`,
      component: path.resolve('./src/containers/Question.js'),
      context: { id, isLast: id === count },
    })
  }));
};
