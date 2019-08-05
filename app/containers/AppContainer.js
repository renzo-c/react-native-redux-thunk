import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { fetchPeople } from '../redux/actions/peopleActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AppContainer = props => {
  useEffect(
    () => {
      props.fetchPeople();
    },
    [] /* watch out, should be [] but prettier change it to [props] */
  );

  console.log('props', props);

  let content = props.randomPeople.people.map(p =>
    p ? <Text>{p.name.first}</Text> : <Text>No Data</Text>
  );

  if (props.randomPeople.isFetching) {
    return <ActivityIndicator size="large" />;
  }
  return <View>{content}</View>;
};

AppContainer.propTypes = {
  fetchPeople: PropTypes.func.isRequired,
  randomPeople: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return { randomPeople: state };
};

export default connect(
  mapStateToProps,
  { fetchPeople }
)(AppContainer);
