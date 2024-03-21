
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const student = {
    name: 'Masejoseng Metsing',
    studentNumber: '901016774',
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        
        <Image
          source={{ uri: student.profilePicture }}
          style={styles.profilePicture}
        />
      
        <Text style={styles.name}>{student.name}</Text>
        
        <Text style={styles.studentNumber}>
          Student Number: {student.studentNumber}
        </Text>
        
        <Text style={styles.currentSemester}>
          Current Semester: {student.currentSemester}
        </Text>
      </View>

      <View style={styles.gradesContainer}>
        <Text style={styles.gradesTitle}>Semester Grades:</Text>
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
