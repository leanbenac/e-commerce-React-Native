import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { colors } from "../styles/colors";
import Input from "../Components/Input";
import { useDispatch } from "react-redux";
import { login, signUp } from "../features/auth";
import loginValidationSchema from "../Utils/validationYup";
import { Formik } from "formik";

const LoginScreen = () => {
  const [registroVista, setRegistroVista] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const dispatch = useDispatch();

  const handleSignup = () => {
    setEmailError("");
    setPasswordError("");
    if (password === confirmPassword) {
      console.log("Se registra!");
      dispatch(signUp({ email: email, password: password }));
    } else {
      setConfirmPasswordError("Los passwords deben coincidir");
    }
  };

  // }

  const handleLogin = () => {
    const validateEmailAndPassword = loginValidationSchema.validate({
      email,
      password,
    });
    console.log(validateEmailAndPassword);
  };

  const handleSubmit = (values) => {
    console.log(values);
    console.log("Se submiteo un form válido");
    if (registroVista) {
      if (values.password === values.confirmPassword) {
        console.log("Se registra!");
        dispatch(signUp({ email: values.email, password: values.password }));
      } else {
        setConfirmPasswordError("Los passwords deben coincidir");
      }
    } else {
      console.log("Entra al login");
      dispatch(login({ email: values.email, password: values.password }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          {registroVista ? "Registration" : "Login"}
        </Text>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validationSchema={loginValidationSchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ handleChange, errors, handleSubmit, values, handleBlur }) => (
            <>
              <Input
                label="Email"
                password={false}
                onChange={handleChange("email")}
                value={values.email}
                error={errors.email}
                onBlur={handleBlur("email")}
              />
              <Input
                label="Password"
                password={true}
                onChange={handleChange("password")}
                value={values.password}
                error={errors.password}
                onBlur={handleBlur("password")}
              />
              {registroVista && (
                <Input
                  label="Confirm password"
                  password={true}
                  onChange={handleChange("confirmPassword")}
                  value={values.confirmPassword}
                  onBlur={handleBlur("confirmPassword")}
                  error={confirmPasswordError}
                />
              )}
              {registroVista ? (
                <TouchableOpacity
                  title="Signup"
                  onPress={handleSubmit}
                  style={styles.btn}
                >
                  <Text>Signup</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  title="Login"
                  onPress={handleSubmit}
                  style={styles.btn}
                >
                  <Text>Login</Text>
                </TouchableOpacity>
              )}
              <View style={styles.textContainer}>
                {registroVista ? (
                  <TouchableOpacity onPress={() => setRegistroVista(false)}>
                    <Text>
                      ¿Ya tienes cuenta? <Text style={styles.link}>Login</Text>
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setRegistroVista(true)}>
                    <Text>
                      ¿No tienes cuenta?{" "}
                      <Text style={styles.link}>¡Crea una!</Text>
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightWhite,
  },
  content: {
    backgroundColor: colors.darkBlue,
    padding: 20,
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  title: {
    fontFamily: "LatoRegular",
    fontSize: 24,
    textAlign: "center",
    color: "#000",
  },
  textContainer: {
    padding: 15,
    paddingLeft:40,
    paddingRight:40,
    fontFamily: "LatoRegular",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  link: {
    color: colors.lightGreen,
    textDecorationLine: "underline",
  },
  btn: {
    backgroundColor: colors.lightGreen,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 5,
  },
});
