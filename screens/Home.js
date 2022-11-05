import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button, Stack } from "@react-native-material/core";
import BasicContainer from "../components/BasicContainer";
import * as LocalAuthentication from "expo-local-authentication";

const HomeScreen = ({ navigation }) => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [fingerprint, setFingerprint] = useState(false);

  useEffect(() => {
    showLogin();
  }, []);

  const showLogin = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    setIsBiometricSupported(compatible);
    const enroll = await LocalAuthentication.isEnrolledAsync();
    if (enroll) {
      setFingerprint(true);
    }
    const result = await LocalAuthentication.authenticateAsync();
    if (!result.success) {
    } else {
      navigation.navigate("todos");
    }
  };

  return (
    <BasicContainer>
      <Stack spacing={20}>
        <View>
          <Button variant="outlined" title="Login" onPress={showLogin} />
        </View>
        <View>
          <View>
            {isBiometricSupported && fingerprint ? (
              <></>
            ) : (
              <View>
                <Text>fingerprint not supported/ allocated</Text>
              </View>
            )}
          </View>
        </View>
      </Stack>
    </BasicContainer>
  );
};

export default HomeScreen;
