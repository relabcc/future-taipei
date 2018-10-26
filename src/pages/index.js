import React from 'react'

import Container from '../components/Container'
import Box from '../components/Box'
import Text from '../components/Text'
import BackgroundImage from '../components/BackgroundImage'
import Button from '../components/Button'
import Link from '../components/Link'
import withLayout from '../hoc/withLayout';

const IndexPage = () => (
  <Container textAlign="center">
    <Box>
      <Text.h1>厲害的標題在這裡</Text.h1>
    </Box>
    <BackgroundImage my="2em" src="https://loremflickr.com/1920/1080" ratio={9 / 16} />
    <Box mx="-1em">
      <Button mx="1em" is={Link} to="/q/1">Start</Button>
    </Box>
  </Container>
)

export default withLayout(IndexPage)
