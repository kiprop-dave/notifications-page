import { useState,useEffect } from 'react';
import styled from 'styled-components';
import { blue, darkgrayishblue,lightgrayishblue1,verydarkblue,white } from './styles/colors';
import data from './utils/data';
import Notification from './components/notification';

const Page = styled.div `
  width: 100vw;
  min-height: 100vh;
  background-color: ${lightgrayishblue1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Main = styled.div `
  width: 51%;
  min-height: 90%;
  background-color: ${white};
  padding: 2%;
  border-radius: 10px;

  @media screen and (max-width: 600px){
    width: 95%;
  }
`
const Header = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 29%;
  
  @media screen and (max-width: 600px){
    width: 45%;
  }
`
const Notif = styled.h2 `
  color: ${verydarkblue};
`
const Unread = styled.div `
  background-color: ${blue};
  color: ${white};
  padding: 1px 5% 1px 5%;
  border-radius: 5px;
`
const Clear = styled.p `
  color: ${darkgrayishblue};
  cursor: pointer;

  &:hover{
    color: ${blue};
  }
`
const NotificationsContainer = styled.div `
  width: 100%;
  margin-top: 1rem;
`


function App(){
  const [allNotifications, setAllNotifications] = useState(data);
  const [unread, setUnread] = useState(0);

  useEffect(checkNotifications,[allNotifications]);

  function checkNotifications(){ // finction to check the notifications
    let count = 0;
    allNotifications.forEach(el => {
      if(!el.read){
        count ++;
      }
    })
    setUnread(count);
  }

  function clearAll(){
    const _notifications = allNotifications.map(el => {
      return {
        ...el,
        read: true
      }
    });
    setAllNotifications(_notifications);

  }

  const notificationElements = allNotifications.map((not,index) => {
    return(
      <Notification key={index} profilePic={not.profilePic} notification={not.notification} read={not.read}
      createdAt={not.createdAt} picture={not.picture} post={not.post} group={not.group} message={not.message}
      name={not.name}/>
    )
  })

 return(
  <>
  <Page>
  <Main>
  <Header>
    <Title>
      <Notif>Notifications</Notif>
      {
        unread > 0 && <Unread>{unread}</Unread>
      }
    </Title>
    <Clear onClick={clearAll}>Mark all as read</Clear>
  </Header>
  <NotificationsContainer>
    {notificationElements}
  </NotificationsContainer>
  </Main>
  </Page>
  </>
 )
}

export default App
