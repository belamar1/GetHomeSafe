import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Contact = ({ item, setUpdated }) => {
  const handleDelete = (email) => {
    console.log(email)
    fetch(`http://192.168.1.110:8080/api/user/contact`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: '63dbf2dbe7c83add97179bf9',
        emergencyContactEmail: email,
        field: 'delete'
      }),
    }).then((response) => {
      console.log(response)
      setUpdated(true)
      // setFriends((prevFriends) => {
      //   const updatedFriends = prevFriends.filter((request) => request !== requester_id);
      //   return updatedFriends;
      // });
      //   setUpdated(true)
    })
}

  return (
    <View style={styles.contactContainer}>
      <View style={styles.contactDetails}><Text style={styles.contactName}>{item.name}</Text>
      <Text>{item.email}</Text></View>
      <View style={styles.deleteButton}><Pressable onPress={() => handleDelete(item.email)}>
        <Ionicons name="trash-outline" style={styles.deleteButton}/>
      </Pressable></View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 10,
    width: 320,
    flexDirection: 'row'
  },
  contactName: {
    fontWeight: 'bold',
    fontSize: 25
  },
  deleteButton: {
    flex: 1,
    fontSize: '40px', 
    color: 'red'
  },
  contactDetails: {
    flex: 5
  }
})
export default Contact

