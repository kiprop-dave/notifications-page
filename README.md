# Frontend Mentor - Notifications page solution

This is my solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications ✅
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero ✅
- View the optimal layout for the interface depending on their device's screen size ✅
- See hover and focus states for all interactive elements on the page ✅

### Screenshot

![](/public//notifications-page.png)

### Links

- Solution URL: [here](https://your-solution-url.com)
- Live Site URL: [here](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow
- TypeScript
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I am still learning how to use typescript. I tried passing props for the first time. Here's some of the code.

```ts
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

```

### Continued development

This was a good project to practise typescript. I still don't feel confident enough using it. I hope to keep improving.

### Useful resources

- [scrimba](https://www.scrimba.com) - This is in my opinion the best place to learn web development.
- [stack overflow](https://stackoverflow.com/) - Whenever I got stuck, I always found some insight here.

## Author

- Website - [here](https://www.tanuikiprop.gq)
- Frontend Mentor - [@kiprop-dave](https://www.frontendmentor.io/profile/kiprop-dave)
