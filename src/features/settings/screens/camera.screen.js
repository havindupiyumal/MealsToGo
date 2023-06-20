import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
//Asynch Storage utility Functions
const storeUserPhoto = async (uri, key) => {
  try {
    console.log("Camera Key : -", key);
    await AsyncStorage.setItem(key, uri);
  } catch (e) {
    // saving error
  }
};

export const CameraScreen = ({ navigation }) => {
  const { currentUser } = useContext(AuthenticationContext);

  const [cameraPermission, setCameraPermission] = useState(null);

  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const permisionFunction = async () => {
    // here is how you can get the camera permission
    const cameraPermission = await Camera.requestCameraPermissionsAsync();

    setCameraPermission(cameraPermission.status === "granted");

    if (cameraPermission.status !== "granted") {
      alert("Permission for media access needed.");
    }
  };

  useEffect(() => {
    permisionFunction();
  }, []);

  useEffect(() => {
    const key = `@user-image-${currentUser.uid}`;
    storeUserPhoto(image, key);
  }, [image]);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log("Photo Taken : ", data.uri);
      setImage(data.uri);
    }
  };

  const toggleCamera = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  if (cameraPermission === null) {
    return <View />;
  }

  if (cameraPermission === false) {
    return (
      <View>
        <Text>No Access to Camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={"1:1"}
        />
      </View>

      <Button title={"Flip"} onPress={toggleCamera} />
      <Button title={"Take Picture"} onPress={takePicture} />
      {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: "row",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  button: {
    flex: 0.1,
    padding: 10,
    alignSelf: "flex-end",
    alignItems: "center",
  },
});
