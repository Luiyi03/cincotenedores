import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
//import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validateEmail } from "../../utils/Validation";
import firebase from "firebase";
import { withNavigation } from "react-navigation";
import Loading from "../Loading";

function RegisterForm(props) {
  const { toastRef, navigation } = props;
  const [hidePassword, setHidePassword] = useState(true);
  const [hideRepeatPassword, setHideRepeatPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [isVisibleLoading, setVisibleLoading] = useState(false);

  const register = async () => {
    setVisibleLoading(true);

    if (!email || !password || !passwordRepeat) {
      toastRef.current.show("Todos los campos son obligatorios");
    } else {
      if (!validateEmail(email)) {
        toastRef.current.show("El email no es correcto!");
      } else {
        if (password !== passwordRepeat) {
          toastRef.current.show("Las constraseñas son diferentes");
        } else {
          await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              navigation.navigate("Account");
            })
            .catch(() => {
              toastRef.current.show(
                "Error al crear la cuenta, intente nuevamente"
              );
            });
        }
      }
    }
    setVisibleLoading(false);
  };

  return (
    <View style={styles.formContainer} behavior="padding" enabled>
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.inputForm}
        onChange={e => setEmail(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        password={true}
        secureTextEntry={hidePassword}
        containerStyle={styles.inputForm}
        onChange={e => setPassword(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />

      <Input
        placeholder="Repetir contraseña"
        password={true}
        secureTextEntry={hideRepeatPassword}
        containerStyle={styles.inputForm}
        onChange={e => setPasswordRepeat(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hideRepeatPassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setHideRepeatPassword(!hideRepeatPassword)}
          />
        }
      />

      <Button
        title="Unirse"
        containerStyle={styles.bntContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={register}
      />
      <Loading text="Creando cuenta" isVisible={isVisibleLoading} />
    </View>
  );
}

export default withNavigation(RegisterForm);

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  inputForm: {
    width: "100%",
    marginTop: 20
  },
  iconRight: {
    color: "#c1c1c1"
  },
  bntContainerRegister: {
    marginTop: 20,
    width: "95%"
  },
  btnRegister: {
    backgroundColor: "#00a680"
  }
});
