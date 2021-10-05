import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph , SearchBar} from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const MyComponent = () => (
  
  <Card>
    
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Block</Button>
      <Button>Favorite</Button>
    </Card.Actions>
   
  </Card>
  
);

export default MyComponent;