// App.js
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ProfilePage from './screens/ProfilePage';
import AboutPage from './screens/AboutPage';
import NotesPage from './screens/NotesPage';
import AwardPage from './screens/AwardPage';
import CoursePage from './screens/CoursePage';
import LoginPage from './screens/LoginPage';
import styles from './screens/styles'; // Assuming you have a separate styles file

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showPopup, setShowPopup] = useState(true);
  const [checklist, setChecklist] = useState([
    { isChecked: false, label: 'Monday' },
    { isChecked: false, label: 'Tuesday' },
    { isChecked: false, label: 'Wednesday' },
    { isChecked: false, label: 'Thursday' },
    { isChecked: false, label: 'Friday' },
    { isChecked: false, label: 'Saturday' },
    { isChecked: false, label: 'Sunday' },
  ]);

  const toggleChecklistItem = (index) => {
    const newChecklist = [...checklist];
    newChecklist[index].isChecked = !newChecklist[index].isChecked;
    setChecklist(newChecklist);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === 'profile') {
      setShowPopup(true);
    }
  };

  const getIconColor = (page) => (currentPage === page ? '#393938' : 'grey');

  const startSession = () => {
    navigateTo('course');
  };
  
  const handleProfileCreation = () => {
    navigateTo('login');
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentPage === 'home' && (
        <>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>V1.1</Text>
          </TouchableOpacity>
          <View style={styles.header}>
            <TouchableOpacity style={styles.navItem} onPress={() => navigateTo('profile')}>
              <Feather name="user" size={24} color={getIconColor('profile')} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Project Leadership</Text>
            <Feather
              name="award"
              size={30}
              color={getIconColor('award')}
              style={styles.icon}
              onPress={() => navigateTo('award')}
            />
          </View>
          {showPopup && (
            <View style={styles.popup}>
              <Text style={styles.popupText}>
                You're currently logged in as a guest.{' '}
                <Text style={{ textDecorationLine: 'underline' }} onPress={handleProfileCreation}>
                  Click here to create a profile.
                </Text>
              </Text>
              <TouchableOpacity onPress={() => setShowPopup(false)} style={styles.closeButton}>
                <Feather name="x" size={20} color="#393938" />
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.greeting}>
            <Text style={styles.greetingText}>Hello, Guest</Text>
          </View>
          <View style={styles.bodyText}>
            <View style={styles.bodyTextContainer}>
              <Text style={styles.bodyTextContent}>
                To start journaling tap on the fab or click{' '}
                <Text style={{ textDecorationLine: 'underline' }} onPress={startSession}>
                  here to start with a session
                </Text>
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.fab} onPress={() => console.log('Starting journaling...')}>
            <Feather name="edit" size={24} color="#ffffff" />
          </TouchableOpacity>
        </>
      )}
      {currentPage === 'profile' && (
        <ProfilePage checklist={checklist} toggleChecklistItem={toggleChecklistItem} />
      )}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'notes' && <NotesPage />}
      {currentPage === 'award' && <AwardPage />}
      {currentPage === 'course' && <CoursePage />}
      {currentPage === 'login' && <LoginPage navigateTo={navigateTo} />}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigateTo('home')}>
          <Feather name="home" size={24} color={getIconColor('home')} />
          <Text style={{ color: getIconColor('home') }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigateTo('course')}>
          <Feather name="book-open" size={24} color={getIconColor('course')} />
          <Text style={{ color: getIconColor('course') }}>Course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigateTo('profile')}>
          <Feather name="user" size={24} color={getIconColor('profile')} />
          <Text style={{ color: getIconColor('profile') }}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigateTo('about')}>
          <Feather name="info" size={24} color={getIconColor('about')} />
          <Text style={{ color: getIconColor('about') }}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigateTo('notes')}>
          <Feather name="book" size={24} color={getIconColor('notes')} />
          <Text style={{ color: getIconColor('notes') }}>Notes</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
