import React from 'react';
import styled, { css } from 'styled-components';
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  color,
  letterSpacing,
  display,
} from 'styled-system';
import tag from 'clean-tag';
import GatsbyLink from 'gatsby-link';
import Box from './Box';
import { buttonStyle } from './Button'

import blacklist from './utils/blacklist';
import { getColorByPropKey } from './utils/getColor';

const linkStyle = css`
  ${fontSize}
  ${space}
  ${color}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${display}
  text-decoration: none;
  ${({ disabled }) => disabled && `
    pointer-events: none;
  `}
  &:hover {
    color: ${getColorByPropKey('hoverColor')};
  }
`;

const NomalLink = styled(tag)`
  ${linkStyle}
`;

const GatsbyStyledLink = styled(GatsbyLink)`
  ${linkStyle}
`;

const Link = ({ to, button, blacklist, ...props }) => {
  if (to) {
    return (
      <GatsbyStyledLink to={to} {...props} />
    );
  }
  return (
    <NomalLink
      is="a"
      target="_blank"
      blacklist={blacklist}
      { ...props }
    />
  );
};

Link.defaultProps = {
  blacklist,
  fontWeight: 'bold',
};

export default Link;
