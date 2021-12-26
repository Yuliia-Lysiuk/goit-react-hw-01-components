
import { Container } from './App.styled';

import user from '../user.json';
import { Profile } from '../components/Profile/Profile';

import data from '../data.json';
import Section from '../components/Statistics/Section/Section';
import { StatisticsList } from '../components/Statistics/StatisticsList/StatisticsList';

import friends from '../friends.json';
import { FriendList } from '../components/Friends/FriendList/FriendList';

import transactions from '../transactions.json'
import { TransactionHistory } from '../components/Transaction/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <Container>
      
      <Profile user={user} />
      
      <Section title="Upload stats"> 
        <StatisticsList stats={data}/>
      </Section>

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
      
    </Container>
  );
}
