import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const NotesPage = () => (
  <View style={styles.notesPage}>
    <Text style={styles.aboutHeader}>Notes</Text>
    <Text style={styles.aboutText}>You haven't added any principles yet</Text>
  </View>
);

export default NotesPage;
