import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AvatarScreen = () => {
  return (
    <View style={styles.container}>
      {avatarUrl ? (
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      ) : (
        <Text>Loading avatar...</Text>
      )}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>

      <Container>
        <avatar></avatar>
        <button onPress={Save}>Save</button>
      </Container>
        
      <button onPress={BlueFish}>Blue Fish</button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1878ff',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
  },
});

export default AvatarScreen;