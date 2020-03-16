import React, { useRef } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import { withNavigation } from "react-navigation";
import LoginForm from "../../components/Account/LoginForm";
import Toast from "react-native-easy-toast";
import LoginFacebook from "../../components/Account/LoginFacebook";

export default function Login(props) {
  const { navigation } = props;
  const toastRef = useRef();

  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/login.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewContainer}>
        <LoginForm toastRef={toastRef} />
        <CreateAccount navigation={navigation} />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.viewContainer}>
        <LoginFacebook toastRef={toastRef} navigation={navigation} />
      </View>
      <Toast
        ref={toastRef}
        style={{ borderRadius: 5 }}
        position="center"
        fadeOutDuration={1000}
        opacity={0.5}
      />
    </ScrollView>
  );
}

function CreateAccount(props) {
  const { navigation } = props;
  return (
    <Text style={styles.textRegister}>
      Aún no tienes una cuenta?{" "}
      <Text
        style={styles.bntRegister}
        onPress={() => navigation.navigate("Register")}
      >
        Regístrarte
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: "100%",
    marginTop: 20
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  bntRegister: {
    color: "#00a680",
    fontWeight: "bold"
  }
});
