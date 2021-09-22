import React, {useEffect} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  Text,
} from 'react-native';
import CardHome from '../components/cardHome';
import {connect} from 'react-redux';
import action from '../store/action';
const BgImg = require('../assets/bg-blood.jpg');

function Home(props) {
  useEffect(() => {
    props.getFBUsers();
  }, []);
  // console.log('PROPS>>> ', props.users);

  var totalDonors = props.users;
  if (totalDonors.length === 0) {
    // console.log('PROPS123>>> ', totalDonors.length);
    return (
      <View>
        <Text>Loading.....</Text>
      </View>
    );
  } else {
    return (
      <ImageBackground source={BgImg} style={styles.bgimg}>
        <View style={styles.container}>
          <CardHome
            navigation={props.navigation}
            check={totalDonors}
            name="Donors"
            color="green"
          />
          <CardHome
            navigation={props.navigation}
            check={totalDonors}
            name="Requests"
            color="red"
          />
        </View>
      </ImageBackground>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = {
  getFBUsers: action.getFBUsers,
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'wheat',
  },
  bgimg: {
    width: '100%',
    height: '100%',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
