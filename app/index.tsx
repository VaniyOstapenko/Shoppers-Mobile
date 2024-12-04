import { TouchableOpacity, Text } from "react-native";
import styles from "./style";
import HomeImage from "@/assets/images/HomeImage";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <TouchableOpacity
        onPress={() => router.replace("/login")}
        style={styles.containerHome}
      >
        <Text style={styles.textHome}>WELCOME TO SHOPPERS</Text>
        <HomeImage />
      </TouchableOpacity>
    </>
  );
}
