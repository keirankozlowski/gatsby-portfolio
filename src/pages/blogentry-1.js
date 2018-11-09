import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const BlogEntry1 = () => (
  <Layout>
    <h1>Lambda Labs Week 1</h1>
    <p>
      This week, I set up the Firestore database and initialized our schema for teacher and student user accounts. 
      This involved a group meeting to discuss what info each user would need. I did the actual technical work to 
      get the database up and running. I also set up our user signup/signin/signout/reset and update password flow 
      and accompanying Auth concerns. This was done with Node/Express and Firebase API. I was able to successfully 
      get this up and running and implemented into basic React frontend views for our project.
    </p>
    <p>
      Check out my contributions (Github handle keirankozlowski) here on the contribution graph.
      <img src="https://puu.sh/BZ20T/88598d7d81.png" alt="contribution graph"/>
    </p>
    <p>
      I think that our group so far is pretty solid. It's been interesting to have 
      the blend of fullstack and iOS students, but we've managed it fairly well so 
      far, with only one technical issue arising from the blend of code.
    </p>
    <p>
      In terms of a social dynamic, I think that I'm incredibly luck to have been 
      assigned to this group. Everyone is competent and willing to coordinate as a 
      team. It seems that I'm by far the most talkative member of the group, so I'm 
      able to help foster communication and discussions about code architecture and 
      technical decisions. I've tried to encourage everyone to speak up about their 
      thoughts for the project and it seems that we're all working in harmony.
    </p>
    <p>
      As far as causing friction between group members, I'm not aware of anything 
      that I've done to cause issues thus far. The one thing I was concerned about 
      potentially causing issues was me being the biggest talker and potentially 
      drowning peoples' opinions out, but I think I've managed to not cross that 
      boundary so far.
    </p>
    <p>
      As far as technical progress on the project, we are making good strides. Both 
      the frontend and backend are deployed via Netlify and Firebase respectively, 
      and user accounts are up and running. Users can sign up for an account through 
      our frontend site right now! 
    </p>
    <p>
      Here is a list of the work that I completed this week:
      <div>
        <h2>Frontend</h2>
          <ul> Ticket 1
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/4">Github PR</a></li>
            <li><a href="https://trello.com/c/tuErrPyd/58-add-firebase-to-fsw-project">Trello Card</a></li>
          </ul>
          <ul> Ticket 2
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/14">Github PR</a></li>
            <li><a href="https://trello.com/c/ltx35skc/65-set-up-authorization-related-front-end-views">Trello Card</a></li>
          </ul>
          {/* <ul> Ticket 3
            <li><a href="">Github PR</a></li>
            <li><a href="">Trello Card</a></li>
          </ul> */}
      </div>
      <div>
        <h2>Backend</h2>
          <ul> Ticket 4
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/22">Github PR</a></li>
            <li><a href="https://trello.com/c/ZI4WxHcD/43-firebase-teacher-user-signup">Trello Card</a></li>
          </ul>
          <ul> Ticket 5
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/23">Github PR</a></li>
            <li><a href="https://trello.com/c/GbeMI73D/45-firebase-teacher-user-signin">Trello Card</a></li>
          </ul>
          <ul> Ticket 6
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/25">Github PR</a></li>
            <li><a href="https://trello.com/c/30fyeCPp/47-firebase-teacher-user-update-pw">Trello Card</a></li>
          </ul>
          <ul> Ticket 7
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/25">Github PR</a></li>
            <li><a href="https://trello.com/c/Wx7H96Vd/75-firebase-teacher-user-reset-pw">Trello Card</a></li>
          </ul>
          <ul> Ticket 8
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/24">Github PR</a></li>
            <li><a href="https://trello.com/c/bAjJUZBX/70-implement-auth-functions-into-the-auth-related-front-end-views">Trello Card</a></li>
          </ul>
          <ul> Ticket 9
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/24">Github PR</a></li>
            <li><a href="https://trello.com/c/rGdBrAb3/80-deploy-frontend">Trello Card</a></li>
          </ul>
      </div>
      <div>
        <h2>Other</h2>
          <ul> Ticket 10
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/26">Github PR</a></li>
            <li><a href="https://trello.com/c/LY4OnIeM/13-readme">Trello Card</a></li>
          </ul>
          <ul> Ticket 11
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/7">Github PR... this also includes initial repo setup</a></li>
            <li><a href="https://trello.com/c/zenyYbAG/8-github-repo">Trello Card</a></li>
          </ul>
      </div>
    </p>
    <p>
      I want to take a closer look at Ticket 4, which is related to user signups.

      First, let's look at the App.js component.
      <br />
      <div><img src="https://puu.sh/BZ1HM/9c1e8877de.png" alt="app.js component"/></div>
      <br />
      
      Currently, I just set up basic routing and imported the Navigation component. 
      Clearly, this will be more complex as we progress into the assignment. Next, let's 
      look at the signupView.js component. 
      <br />
      <div><img src="https://puu.sh/BZ1Pl/74df916fdf.png" alt="signupView.js component"/></div>
      <br />
      
      Users can enter an email and password to sign up. However, there are a few checks 
      in place. First, users have to enter a properly formatted email address.
      <br />
      <div><img src="https://puu.sh/BZ1NL/bc58f6440b.png" alt="email format check"/></div>
      <br />
      
      Second, passwords must be at least 6 characters.
      <br />
      <div><img src="https://puu.sh/BZ1TT/0713307db6.png" alt="password character count check"/></div>
      <br />
      
      Once a proper email and password are entered, users are redirected to the landing page and granted 
      authorization for other pages. As you can see, the navigation shifts to a new view 
      protected by user authorization.
      <br />
      <div><img src="https://puu.sh/BZ1Wr/f6c62f04e1.png" alt="authorized nav view"/></div>
      <br />

      This shift of view for the authorization is primarily done through a small higher order component 
      called withAuthentication.js. 
      <br />
      <div><img src="https://puu.sh/BZ2kq/c65ddd2251.png" alt="withAuthentication.js higher order component"/></div>
      <br />
      This higher order component essentially checks against the Firestore for a matching user from the signin, 
      and if there is designates the user as authenticated.
    </p>
    <p>
      Check out our 
      <a href="https://musicmaker-teacher.netlify.com/">Frontend</a> 
      and 
      <a href="https://musicmaker-4b2e8.firebaseapp.com/">Backend</a> 
      deployments so far!
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogEntry1