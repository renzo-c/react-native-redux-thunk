import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import PropTypes from 'prop-types';

const PeopleList = props => {
  const _keyExtractor = item => item.email;

  const _renderItem = ({ item }) => {
    const { name, picture, cell, email } = item;
    return (
      <View>
        <View style={styles.cardContainerStyle}>
          <View>
            <Text style={styles.cardTextStyle}>
              {name.first} {name.last} {'\n'}
              {cell} {'\n'}
              {email}
            </Text>
          </View>
          <Image
            style={styles.faceImageStyle}
            source={{ uri: picture.medium }}
          />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={_keyExtractor}
      data={props.people}
      renderItem={_renderItem}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default PeopleList;

PeopleList.propTypes = {
  people: PropTypes.array,
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    backgroundColor: '#4e8087',
    padding: 10,
  },
  faceImageStyle: {
    width: 65,
    height: 65,
  },
  cardTextStyle: {
    color: 'white',
    textAlign: 'left'
  },
});
