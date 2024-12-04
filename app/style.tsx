import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: "#FAFF10",
    justifyContent: "center",
    alignItems: "center",
    gap: 41,
  },
  textHome: {
    fontFamily: "InterSemiBold",
    fontSize: 36,
    fontWeight: 600,
    textAlign: "center",
  },

  containerLogin: {
    alignItems: "center",
  },
  viewWelcomeBack: {
    width: "90%",
    alignContent: "center",
  },
  textWelcome: {
    fontFamily: "InterRegular",
    fontSize: 24,
    fontWeight: 400,
  },
  textLoginWith: {
    fontFamily: "InterRegular",
    fontSize: 12,
    fontWeight: 400,
    color: "#606060",
  },
  containerUsername: {
    width: "90%",
    alignContent: "center",
  },
});

export default styles;
