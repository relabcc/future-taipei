import sampleSize from 'lodash/sampleSize';
import range from 'lodash/range';
import map from 'lodash/map';
import set from 'lodash/set';
import pullAt from 'lodash/pullAt';
import topics from '../topics';

// 取得key的列表
const keys = map(topics, 'key');
// 將主題做成以key為key的物件
const topicsByKey = topics.reduce((all, topic) =>
  set(
    all,
    topic.key,
    set(topic, 'seed', Math.round(Math.random())) // 藉機標記哪個option要在首輪出現
  ), {});

export default () => range(2).reduce((questions, index) => {
  // 標記這一輪的選項
  const batchQuestion = keys.map((key) => {
    const match = topicsByKey[key];
    return {
      key,
      label: match.options[Math.abs(index - match.seed)],
    };
  });
  const idToPick = sampleSize(range(6), 3);
  // 選出一組題目
  const picked = pullAt(batchQuestion, idToPick);
  // 把選出來的加入列表
  questions.push(picked);
  // 把剩下的加入列表
  questions.push(batchQuestion);
  // return 列表，繼續下一輪
  return questions;
}, []);
