import * as React from 'react';
import { useSyncRef } from 'react-aria/node_modules/@react-aria/utils';
import BackButton from '../components/BackButton'
import { Avatar, Button, Card, Title, Paragraph , SearchBar} from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
var cards = [];
const getMoviesFromApiAsync = async () => {
  try {
    const response = await fetch(
      'http://127.0.0.1:8000/api/highlighted'
    );
    const json = await response.json();
    json.forEach((user) => {
      cards.push(
        <Card key = {user.id}  style={{marginHorizontal:20}}>
        <Card.Content>
          <Title>{user.first_name} {user.last_name}</Title>
          
        </Card.Content>
        <Card.Cover style={{aspectRatio: 1/1}} source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>Block</Button>
          <Button>Favorite</Button>
        </Card.Actions>
       
      </Card>
      )
    
  })
  } catch (error) {
    console.error(error);
  }
};
getMoviesFromApiAsync();



const MyComponent = ({ navigation }) => (
  <>

<Button
        mode="outlined"
        onPress={() => navigation.navigate('Home')}> Go back </Button>
  <Card>{cards}</Card>
  </>
 
  
);

export default MyComponent;