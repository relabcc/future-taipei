import React from 'react';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

import Text from '../components/Text';
import Link from '../components/Link';
import Box from '../components/Box';
import Button from '../components/Button';
import Container from '../components/Container';
import Layout from './Layout';

import withQuestions from '../stores/withQuestions';

const SortableItem = SortableElement(({ children }) =>
  <Box
    border="1px solid"
    borderColor="gray"
    p="1em"
    my="0.25em"
    bg="white"
  >{children}</Box>
);

const SortableList = SortableContainer(({ items }) => (
  <Box my="2em">
    {items.map((value, index) => (
      <SortableItem key={`item-${index}`} index={index}>
        {value}
      </SortableItem>
    ))}
  </Box>
));

const Question = ({ pageContext: { id, isLast }, questions, answers, setSort }) => {
  const qId = id - 1;
  const orders = answers.get(qId).toJS();
  return (
    <Layout>
      <Container textAlign="center">
        <Text.h3>請排序</Text.h3>
        <SortableList
          items={orders.map((key) => questions.getIn([qId, key]))}
          onSortEnd={({ oldIndex, newIndex }) => setSort({ qId, order: arrayMove(orders, oldIndex, newIndex) })}
        />
        <Button is={Link} to={isLast ? '/result' : `/q/${+id + 1}`}>{isLast ? '看結果' : '下一題'}</Button>
      </Container>
    </Layout>
  );
};

export default withQuestions(Question);
