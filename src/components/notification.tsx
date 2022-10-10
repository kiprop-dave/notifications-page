import React from 'react';
import styled from 'styled-components';
import {blue, darkgrayishblue, grayishblue, lightgrayishblue1, verydarkblue, white} from "../styles/colors"


interface notificationProps{
    name: string;
    profilePic: string;
    notification: string;
    createdAt: string;
    read: boolean;
    post?: string;
    group?: string;
    message?: string;
    picture?: string;
} 

type ContainerProps ={
    read: boolean
}

const Container = styled.div `
    width: 100%;
    background-color: ${({read}: ContainerProps) => read ? white : lightgrayishblue1};
    margin: 0.5rem 0 1rem 0;
    display: flex;
    position: relative;
    padding: 2px 8px 2px 8px;
    border-radius: 5px;
`
const Profile = styled.img `
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
`

const Details = styled.div`
    width: 100%;
    height: auto;
    position: relative;

`
const Content = styled.p `
    color: ${grayishblue};
`
const Name = styled.span`
    color: ${verydarkblue};
    font-size: 18px;
    font-weight: 600;
    margin-right: 0.5rem;
`

type styledProps = {
    post?: true;
}

const PostGroup = styled.span `
    color: ${({post} : styledProps) => post ? darkgrayishblue : blue};
    margin-left: 0.5rem;
    font-weight: 600;
    cursor: pointer;

    &:hover{
        color: ${blue};
    }
`
const Unread = styled.span `
    height: inherit;
    width: 15px;
    margin-left: 0.1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`
const Dot = styled.span `
    width: 8px;
    height: 8px;
    display: block;
    border-radius: 50%;
    background: red;
`
const Message = styled.div `
    padding: 3%;
    border: solid 1px ${lightgrayishblue1};
    border-radius: 5px;
    cursor: pointer;
    color: ${grayishblue};
    margin-top: 0.5rem;

    &:hover{
        background-color: ${lightgrayishblue1};
    }
`
const Picture = styled.img `
    width: 3rem;
    height: 3rem;
    border-radius: 5px;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
`


function Notification(props : notificationProps){
    const {
        profilePic,notification,createdAt,post,
        group,message,picture,read,name
    } = props;

 return(
  <>
  <Container read={read}>
    <Profile src={profilePic} alt='profile picture'/>
    <Details>
        <Content>
            <Name>{name}</Name>
            <span>{notification}</span>
            {
                post && <PostGroup post={true}>{post}</PostGroup>
            }
            {
                group && <PostGroup>{group}</PostGroup>
            }
            {
                !read && <Unread><Dot/></Unread>
            }
        </Content>
        <Content>{createdAt}</Content>
        {
            message && <Message>{message}</Message>
        }
        {
            picture && <Picture src={picture} alt='picure'/>
        }
    </Details>
  </Container>
  </>
 )
}

export default Notification