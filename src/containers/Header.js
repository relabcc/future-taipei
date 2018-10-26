import React from 'react'
import Box from '../components/Box';
import Text from '../components/Text';
import Link from '../components/Link';

const Header = ({ siteTitle }) => (
  <Box
    bg="primary"
    mb="1.5em"
  >
    <Box
      px="1em"
      py="1.5em"
    >
      <Text.h1>
        <Link to="/" color="white">
          {siteTitle}
        </Link>
      </Text.h1>
    </Box>
  </Box>
)

export default Header
