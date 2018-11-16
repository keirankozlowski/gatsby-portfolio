import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const BlogEntry2 = () => (
  <Layout>
    <h1>Lambda Labs Week 2</h1>
    <p>
      This week, I set up Google authentication and started trying to implement redux into our frontend. 
      This was done with Node/Express and Firebase API. I was able to successfully get this up and running 
      and implemented into basic React frontend views for our project. Additionally, I attempted to get 
      some basic Redux implemented for our front-end views with limited success.
    </p>
    <p>
      Check out my contributions (Github handle keirankozlowski) here on the contribution graph.
      Also check out this <a href="https://youtu.be/N6WPQfcbC7o">link</a> to my first Whiteboard Interview!
      <img src="https://puu.sh/C2MGq/6012961179.png" alt="contribution graph"/>
    </p>
    <p>
      I think that our group was severely negatively impacted this week by the missed 
      day and some other extenuating circumstances. To summarize, we had an issue with 
      out Git repo that made us unable to merge from Friday until Tuesday afternoon. 
      Additionally, I had a car accident resulting in a concussion and some soft tissue 
      injuries in my lower back that has taken me somewhat out of commission, and one of 
      our other teammates had a tree fall on his power line which took him out for a 
      whole day. Overall, the week was not a great one.
    </p>
    <p>
      On a positive note, we were able to get both the QRCode generator implemented and do GET 
      requests to the server to retrieve a dummy PDF file. It was exciting to see that progress 
      for us. 
    </p>
    <p>
      Unfortunately, we were not able to complete the API MVP requirement this week due to 
      difficulties with deployment- the local version works, but fails on the deployed one. 
      However, I was at least able to integrate our Google authentication properly, as was 
      the iOS team. So, we have that going for us.
    </p>
    <p>
      Here is a list of the work that I completed this week:
      <div>
        <h2>Frontend</h2>
          <ul> Ticket 1
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/64">Github PR</a></li>
            <li><a href="https://trello.com/c/Vei9MV4u/111-create-a-frontend-page-with-redux-to-show-all-teachers">Trello Card</a></li>
          </ul>
          <ul> Ticket 2
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/64">Github PR</a></li>
            <li><a href="https://trello.com/c/atSiSe11/112-set-up-less-skeleton-preprocessor">Trello Card</a></li>
          </ul>
      </div>
      <div>
        <h2>Backend</h2>
          <ul> Ticket 3
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/58">Github PR</a></li>
            <li><a href="https://trello.com/c/T1rl8qLA/102-implement-3p-auth-google">Trello Card</a></li>
          </ul>
      </div>
      <div>
        <h2>Other</h2>
          <ul> Ticket 4
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/45">Github PR</a></li>
            <li><a href="https://trello.com/c/WT1nAMrJ/103-resolve-github-issue-by-splitting-the-projects">Trello Card</a></li>
          </ul>
      </div>
    </p>
    <p>
      I want to take a closer look at Ticket 3, which is related to Google authentication.

      Let's take a look at the signinView.js component. 
      <br />
      <div><img src="https://puu.sh/C2NP0/4befb4be6a.png" alt="signinView.js component"/></div>
      <br />
      
      I implemented this doSignInWithGoogle function, which essentially creates a token from the 
      user's Google account and uses it to sign in with. It's currently set up to pop out a signin 
      window as seen here: 
      <br />
      <div><img src="https://puu.sh/C2NRE/cc74f1387e.png" alt="Google signin"/></div>
      <br />
      
      Users can pick their email to authenticate with, then sign in and be taken to the authenticated view: 
      <br />
      <div><img src="https://puu.sh/C2NT7/3aeab2fd3d.png" alt="auth view"/></div>
      <br />
    </p>
    <p>
      Check out our 
      <a href="https://musicmaker-teacher.netlify.com/"> Frontend </a> 
      and 
      <a href="https://musicmaker-4b2e8.firebaseapp.com/"> Backend </a> 
      deployments so far! And here's proof of the user db existing, including a few with Google auth: 
      <img src="https://puu.sh/C2NUF/f83beb8404.png" alt="list of users" />
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogEntry2