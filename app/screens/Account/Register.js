import React, { useRef } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RegisterForm from "../../components/Account/RegisterForm";
import Toast from "react-native-easy-toast";

export default function Register() {
  const toastRef = useRef();

  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../assets/img/login.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.viewForm}>
        <RegisterForm toastRef={toastRef} />
      </View>
      <Toast
        ref={toastRef}
        style={{ borderRadius: 5 }}
        position="center"
        fadeOutDuration={1000}
        opacity={0.5}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: "100%",
    marginTop: 20
  },
  viewForm: {
    marginLeft: 40,
    marginRight: 40
  }
});
