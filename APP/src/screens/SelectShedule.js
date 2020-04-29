import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import SheduleList from '../model/SheduleList'
const Dashboard = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Welcome !</Header>
    <SheduleList/>
    
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
  </Background>
);

export default memo(Dashboard);
