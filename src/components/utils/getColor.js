export const getColorByPropKey = (key) => (props) => {
  const colorKey = props[key];
  return props.theme.colors[colorKey] || colorKey;
};
