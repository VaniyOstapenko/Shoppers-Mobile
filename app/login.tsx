import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function Login() {
  return (
    <>
      <View style={styles.containerLogin}>
        <View style={styles.viewWelcomeBack}>
          <Text style={styles.textWelcome}>Welcome Back !</Text>
          <Text style={styles.textLoginWith}>
            Login with Username & password
          </Text>
        </View>
        <View style={styles.containerUsername}>
          <View>
            <Text>Username</Text>
            <TextInput></TextInput>
          </View>
          <View>
            <Text>Password</Text>
            <TextInput></TextInput>
          </View>
          <TouchableOpacity>SIGN IN</TouchableOpacity>
        </View>
        <Text>
          Create a new account? <Text>Sign Up</Text>
        </Text>
      </View>
    </>
  );
}
