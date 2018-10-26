import sampleSize from 'lodash/sampleSize';
import range from 'lodash/range';
import set from 'lodash/set';
import pullAt from 'lodash/pullAt';
import mapValues from 'lodash/mapValues';
import topics from '../topics';

// 取得key的列表
const keys = Object.keys(topics);
// 標記哪個option要在首輪出現
const topicsWithSeed = mapValues(topics, (topic) => set(topic, 'seed', Math.round(Math.random())));

export default () => range(2).reduce((questions, index) => {
  // 標記這一輪的選項
  const batchQuestion = keys.map((key) => {
    const match = topicsWithSeed[key];
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
