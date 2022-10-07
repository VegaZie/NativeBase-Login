import { useState } from "react";
import {
  Box,
  VStack,
  Button,
  View,
  Center,
  Image,
} from "native-base";
import * as ImagePicker from "expo-image-picker";

export const Image_Picker = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePickerAsync = async () => {
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View>
        <VStack space={2} justifyContent="center" alignItems="center" safeAreaTop // my={6}
      mb={6}
        >
          <Image
            source={{
              uri: selectedImage.localUri,
            }}
            alt="Alternate Text"
            size="xl"
          />
        </VStack>
      </View>
    );
  }

  return (
    <View>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Center
            bg="primary.400"
            _text={{
              color: "white",
              fontWeight: "bold",
            }}
            height={200}
            width={{
              base: 200,
              lg: 250,
            }}
          >
            <Box>
              <Box
                alignSelf="center"
                bg="primary.500"
                _text={{
                  fontSize: "md",
                  fontWeight: "medium",
                  color: "warmGray.50",
                  letterSpacing: "lg",
                }}
              >
                To share a photo from your phone with a friend, just press the
                button below!
              </Box>
            </Box>
            <Box>
              <Box
                alignSelf="center"
                bg="primary.500"
                _text={{
                  fontSize: "md",
                  fontWeight: "medium",
                  color: "warmGray.50",
                  letterSpacing: "lg",
                }}
              >
                <Button
                  onPress={openImagePickerAsync}
                  background="blue.600"
                  padding="5"
                  borderRadius="5"
                >
                  Pick a photo
                </Button>
              </Box>
            </Box>
          </Center>
        </Box>
      </Center>
    </View>
  );
};
