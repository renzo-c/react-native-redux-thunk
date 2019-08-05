import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import PeopleList from '../components/PeopleList';
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

  let content = <PeopleList people={props.randomPeople.people} />;

  if (props.randomPeople.isFetching) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
