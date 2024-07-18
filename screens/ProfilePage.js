import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './styles'; // Assuming you have a separate styles file

const ProfilePage = ({ checklist, toggleChecklistItem }) => (
  <ScrollView contentContainerStyle={styles.profilePageContainer}>
    <View style={styles.profilePage}>
      <Text style={styles.headerText}>Profile</Text>
      <View style={styles.profileHeader}>
        <View style={styles.leftCircle}>
          <Text style={styles.profileText}>Add Profile Picture</Text>
          <TouchableOpacity style={styles.plusIcon}>
            <Feather name="plus" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileBio}>
            <Text>Lorem ipsum dolor sit amet...</Text>
          </View>
        </View>
      </View>
      <View style={styles.weekdaysContainer}>
        <View style={styles.checklistContainer}>
          {checklist.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.checklistItem, { backgroundColor: item.isChecked ? '#393938' : '#ffffff' }]}
              onPress={() => toggleChecklistItem(index)}
            >
              {item.isChecked && <Feather name="check" size={28} color="#ffffff" style={{ marginTop: 11 }} />}
              <Text style={styles.checklistLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Text style={[styles.ht, { marginLeft: 10 }]}>
        Principles <Feather name="arrow-right" size={20} color="#393938" />
      </Text>
      <Text style={[styles.hm, { marginLeft: 10 }]}>
        Achievements <Feather name="arrow-right" size={20} color="#393938" />
      </Text>
    </View>
  </ScrollView>
);

export default ProfilePage;
