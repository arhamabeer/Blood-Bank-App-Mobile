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
import CardDonor from '../components/cardDonor';
import {connect} from 'react-redux';
import action from '../store/action';

const BgImg = require('../assets/bg-blood.jpg');

function Donor(props) {
  useEffect(async () => {
    await props.getFBUsers();
  }, []);

  var totalUsers = props.users;
  var Donors = '';

  const groupByProp = (arr, check) => {
    var result = {};
    arr.forEach(function (item) {
      var val = item[check];
      if (!result[val]) result[val] = [item];
      else result[val].push(item);
    });
    Donors = result.Donor;
  };
  groupByProp(totalUsers, 'wanted');

  // console.log(Donors)
  if (!Donors) {
    return (
      <View>
        <Text>Loading.....</Text>
      </View>
    );
  } else {
    const keys = Object.keys(Donors);
    var allUsers = keys.map(item => {
      return {_id: item, ...Donors[item]};
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
    // hist.push({ pathname: "/users/search", data: value , purpose: 'donor'});
  };
  return (
    <ImageBackground source={BgImg} style={styles.bgimg}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            {allUsers.map(val => {
              return <CardDonor purpose="DONOR" clr="green" item={val} />;
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
});
export default connect(mapStateToProps, mapDispatchToProps)(Donor);
