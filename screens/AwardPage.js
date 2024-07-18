import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const AwardPage = () => (
  <View style={styles.notesPage}>
    <Text style={styles.aboutHeader}>Awards</Text>
    <Text style={styles.aboutText}>You haven't collected any awards yet</Text>
  </View>
);

export default AwardPage;
