// Import React and necessary components from react-native
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

// Define your functional component
export default function App() {
  const student = {
    name: 'Masejoseng Metsing',
    studentNumber: '901016774',
    // Provide a valid URL for the profile picture
    profilePicture: 'https://www.nawpic.com/media/2020/cute-black-girl-nawpic-4.jpg',
    currentSemester: 'Semester 2',
    semesterGrades: [
      { course: 'Database Systems', grade: 'A*' },
      { course: 'Calculus II', grade: 'B+' },
      { course: 'C++ Programming', grade: 'A-' },
      { course: 'Java Programming', grade: 'B-' },
      { course: 'Software Analysis', grade: 'C' },
      { course: 'Probability & Statistics', grade: 'A-' },
    ],
  };

  // Return JSX
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        {/* Use Image component to display the profile picture */}
        <Image
          source={{ uri: student.profilePicture }}
          style={styles.profilePicture}
        />
        {/* Display student's name */}
        <Text style={styles.name}>{student.name}</Text>
        {/* Display student's number */}
        <Text style={styles.studentNumber}>
          Student Number: {student.studentNumber}
        </Text>
        {/* Display current semester */}
        <Text style={styles.currentSemester}>
          Current Semester: {student.currentSemester}
        </Text>
      </View>

      {/* Display semester grades */}
      <View style={styles.gradesContainer}>
        <Text style={styles.gradesTitle}>Semester Grades:</Text>
        {/* Map through semester grades and display each course with its grade */}
        {student.semesterGrades.map((item, index) => (
          <View key={index} style={styles.gradeItem}>
            <Text style={styles.course}>{item.course}</Text>
            <Text style={styles.grade}>{item.grade}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightgrey',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  studentNumber: {
    fontSize: 16,
    marginBottom: 5,
  },
  currentSemester: {
    fontSize: 16,
    marginBottom: 20,
  },
  gradesContainer: {
    borderWidth: 2,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5 ,
  },
  gradesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gradeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  course: {
    fontSize: 16,
  },
  grade: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
