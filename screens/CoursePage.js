import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CoursePage = () => (
  <View contentContainerStyle={styles.scrollContainer}>
    <View style={styles.headerContainer}>
      <Text>Good leadership practice can positively transform people's lives. We believe no one should have to pay for it.</Text>
    </View>
    <View style={[styles.iconContainer, styles.container1]}>
      <Feather name="award" size={60} color="#000" />
      <Text style={styles.iconText}>Award</Text>
    </View>
    <View style={[styles.iconContainer, styles.container2]}>
      <Feather name="book-open" size={80} color="#fff" />
      <Text style={[styles.iconText, { color: '#fff' }]}>Book</Text>
    </View>
    <View style={[styles.iconContainer, styles.container3]}>
      <Feather name="globe" size={70} color="#000" />
      <Text style={styles.iconText}>Globe</Text>
    </View>
    <View style={[styles.iconContainer, styles.container4]}>
      <Feather name="heart" size={70} color="#000" />
      <Text style={styles.iconText}>Heart</Text>
    </View>
    <View style={[styles.iconContainer, styles.container5]}>
      <Feather name="users" size={100} color="#000" />
      <Text style={styles.iconText}>Community</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  headerContainer: {
    backgroundColor: '#F7F0EF', // Light grey background
    padding: 20,
    borderRadius: 10,
    marginBottom: -5,
    shadowColor: '#000',
    width: 355,
    marginLeft: 95,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  iconText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  container1: {
    marginTop: 25,
    width: 160,
    height: 179,
    marginRight: 185,
    marginLeft: 95,
    marginBottom: -13,
    backgroundColor: "#E2EEFA",
  },
  container2: {
    width: 180,
    height: 230,
    marginBottom: 188,
    marginLeft: 270,
    marginTop: -165,
    backgroundColor: "#393938",
  },
  container3: {
    width: 160,
    height: 210,
    marginBottom: 60,
    marginRight: 290,
    marginTop: -230,
    backgroundColor: "#FFD6C2",
    marginLeft: 95,
  },
  container4: {
    width: 180,
    height: 160,
    marginLeft: 270,
    marginTop: -219,
    marginBottom: 5,
    backgroundColor: "#C1E7D2",
  },
  container5: {
    width: 355,
    height: 160,
    marginLeft: 95,
    marginTop: 5,
    backgroundColor: "#FCEAEA",
  },
});

export default CoursePage;
