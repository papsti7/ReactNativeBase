import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

const CardSection = props => <View style={styles.containerStyle}>{props.children}</View>;

CardSection.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export { CardSection };
