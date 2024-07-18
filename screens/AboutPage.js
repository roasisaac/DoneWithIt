import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const AboutPage = () => (
  <View style={styles.aboutPage}>
    <Text style={styles.aboutHeader}>About Us</Text>
    <Text style={styles.aboutText}>
      Welcome to Project Leadership! We are dedicated to helping you achieve your goals and succeed in your projects.
    </Text>
  </View>
);

export default AboutPage;
