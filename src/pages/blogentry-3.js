import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const BlogEntry3 = () => (
  <Layout>
    <h1>Lambda Labs Week 3</h1>
    <p>
      This week, I set up Stripe and got some basic views hooked up and styled in the frontend. 
      This was done with a combo of React, Node/Express, and the Stripe API. The Stripe integration 
      was by far the most challenging part of the week, but I hope to have it fully deployed by the 
      end of today.
    </p>
    <p>
      Check out my contributions (Github handle keirankozlowski) here on the contribution graph.
      Also check out this <a href="https://www.youtube.com/watch?v=y3EXL5ed7J0&feature=youtu.be">link</a> 
      to my most recent Whiteboard Interview! <img src="https://puu.sh/Cac4Z/795b887c60.png" alt="contribution graph"/>
    </p>
    <p>
      Our issues from previous weeks are still haunting us; we were not able to hit MVP again. In 
      fact, we're still working on integrating APIs which was a requirement for the previous checkin. 
      It is pretty disheartening to be working as hard as I am and just not have it happening.
    </p>
    <p>
      On a positive note, I do feel like we're turning the corner. We've been having issues with Firebase 
      calls for our API for *weeks* and a lot of that was resolved this week. We finally are able to connect 
      to our backend while deployed. :)
    </p>
    <p>
      For today's weekly question, I'm supposed to prove that we're feature complete. However, we aren't at this time. 
      Therefore, here's a list of stuff we were supposed to have done and I'll list off the ones that are complete:
    </p>
    <p>
      <h4>User accounts and authentication</h4>
      <ul>
        <li>Post users to DB - done</li>
        <li>Sign up - done</li>
        <li>Sign in - done</li>
        <li>Reset PW - done</li>
        <li>Google OAuth - done</li>
      </ul>
      <h4>Deployment and frontend/backend communication</h4>
      <ul>
        <li>Frontend - done</li>
        <li>Backend - done</li>
        <li>Frontend and Backend can talk - done</li>
      </ul>
      <h4>APIs and services</h4>
      <ul>
        <li>Stripe - done</li>
        <li>PDF - GET calls working, POST in progress</li>
        <li>QR - the actual code POSTs properly, still working on image</li>
      </ul>
      <h4>Feature list</h4>
      <ul>
        <li>Teachers have viws for students, assignments, settings, and billing - done</li>
        <li>Teachers can have associated students - done</li>
        <li>Teachers can have associated assignments - done</li>
        <li>Teachers can create an assignment - not done</li>
        <li>Teachers can grade an assignment - not done</li>
        <li>Teachers can make a charge to pay for an account - done</li>
      </ul>
      <h4>Styling</h4>
      <ul>
        <li>Responsive - not done</li>
      </ul>
    </p>
    <p>
      Here is a list of the work that I completed this week:
      <div>
        <h2>Frontend</h2>
          <ul> Ticket 1
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/73">Github PR</a></li>
            <li><a href="https://trello.com/c/atSiSe11/112-set-up-less-skeleton-preprocessor">Trello Card</a></li>
            <li><a href="https://trello.com/c/0PYI1dl2/108-set-up-basic-layout-for-landing-page">Trello Card</a></li>
            <li><a href="https://trello.com/c/bzFRaEs7/118-create-dashboard-page-for-teacher-dashboard-to-show-list-of-students">Trello Card</a></li>
          </ul>
          <ul> Ticket 2
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/74">Github PR</a></li>
            <li><a href="https://trello.com/c/kPQ7cQTd/125-finish-basic-styles-for-teacher-dashboard-subpages">Trello Card</a></li>
          </ul>
          <ul> Ticket 3
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/81">Github PR</a></li>
            <li><a href="https://trello.com/c/kPQ7cQTd/125-finish-basic-styles-for-teacher-dashboard-subpages">Trello Card</a></li>
            <li><a href="https://trello.com/c/0PYI1dl2/108-set-up-basic-layout-for-landing-page">Trello Card</a></li>
          </ul>
          <ul> Ticket 4
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/94">Github PR</a></li>
            <li><a href="https://trello.com/c/VEZ1s8jB/139-implement-stripe-frontend">Trello Card</a></li>
          </ul>
      </div>
      <div>
        <h2>Backend</h2>
          <ul> Ticket 5
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/96">Github PR</a></li>
            <li><a href="https://trello.com/c/9riEKz8n/106-implement-stripe-backend">Trello Card</a></li>
          </ul>
      </div>
      <div>
        <h2>Other (Should be done by end of day)</h2>
          <ul> Ticket 6
            <li><a href="#">Github PR</a></li>
            <li><a href="https://trello.com/c/ROWKsFEf/132-fix-issue-with-refreshes-on-netlify-deployment">Trello Card</a></li>
          </ul>
      </div>
    </p>
    <p>
      I want to take a closer look at Tickets 4 and 5, which covers Stripe implementation.

      Let's take a look at the form component, where users input their credit card info to make a charge. 
      <br />
      <div><img src="https://puu.sh/CadO5/ad802c58f4.png" alt="frontend Stripe form"/></div>
      <br />
      When the user presses the submit button after filling card info, it creates a token and attempts 
      a post request to the backend with that token.
      This is what it looks like currently deployed: 
      <br />
      <div><img src="https://puu.sh/CadPK/1bb5aaa2c7.png" alt="billing page"/></div>
      <br />
      
      If the call is successful, it gives a success alert: 
      <br />
      <div><img src="https://puu.sh/CadYB/87a91fbd6e.png" alt="billing success"/></div>
      <br />
      This is what the Stripe endpoint looks like: 
      <br />
      <div><img src="https://puu.sh/Cae1P/77983908f1.png" alt="stripe endpoint"/></div>
      <br />
      As you can see, there's a space designated for a "paid user" bool to be inserted at 
      a later time, but at least we're posting!
    </p>
    <p>
      Check out our 
      <a href="https://musicmaker-teacher.netlify.com/"> Frontend </a> 
      and 
      <a href="https://musicmaker-4b2e8.firebaseapp.com/"> Backend </a> 
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogEntry3;