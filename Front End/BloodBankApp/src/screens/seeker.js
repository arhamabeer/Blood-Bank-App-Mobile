import React, {useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import CardSeeker from '../components/cardSeeker';
import {connect} from 'react-redux';
import action from '../store/action';

const BgImg = require('../assets/bg-blood.jpg');

function Seeker(props) {
  var totalUsers = props.users;
  var Require = '';

  const groupByProp = (arr, check) => {
    var result = {};
    arr.forEach(function (item) {
      var val = item[check];
      if (!result[val]) result[val] = [item];
      else result[val].push(item);
    });
    Require = result.WantBlood;
    // console.log(result)
  };
  groupByProp(totalUsers, 'wanted');

  // console.log(Require)
  if (!Require) {
    return <h1>Loading</h1>;
  } else {
    const keys = Object.keys(Require);
    var allUsers = keys.map(item => {
      return {_id: item, ...Require[item]};
    });
  }

  const getSearchItem = e => {
    console.log('search=> ', allUsers);
    let UppCase = e.toUpperCase();

    let index = allUsers
      .map((v, idx) => (v.bloodGroup.startsWith(UppCase) ? idx : ''))
      .filter(String); //return the index
    // console.log(indexes)

    var value = index.map(v => {
      return allUsers[v];
    });

    // hist.push({ pathname: "/users/search", data: value , purpose: 'required'});
  };

  return (
    <ImageBackground source={BgImg} style={styles.bgimg}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            {allUsers.map(val => {
              return (
                <CardSeeker
                  purpose="Seeker"
                  clr="red"
                  item={val}
                  navigation={props.navigation}
                />
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  getFBUsers: () => dispatch(action.getFBUsers()),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'wheat',
  },
  bgimg: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'wheat',
  },
  bgimg: {
    width: '100%',
    height: '100%',
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Seeker);
