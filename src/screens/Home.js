import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function Home({ navigation }) {
  return (
    <Background>
        
      <Logo />
      <Header>Login Template</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Card')}
      >
        Highlited
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('users')}
      >
        All Users
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('profile')}
      >
        Profile
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Dashboard')}
      >
        Notifications
      </Button>
    </Background>
  )
}
