import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const BlogEntry4 = () => (
  <Layout>
    <h1>Lambda Labs Week 4</h1>
    <p>
      This week, I implemented Reactstrap and improved the styling of several views and started working 
      on integrating some more axios calls in the frontend. This was done with a combo of React and the 
      Reactstrap library. I also assisted my teammate Jeanette in debugging some of the backend endpoints. 
    </p>
    <p>
      Check out my contributions (Github handle keirankozlowski) here on the contribution graph.
      Also check out this <a href="https://youtu.be/_AZEoP8-HKA">link</a> 
      to my most recent Whiteboard Interview! <img src="https://puu.sh/Ce2im/d1cb9cb91a.png" alt="contribution graph"/>
    </p>
    <p>
      I'm starting to feel much more positively about our project. We finally finished getting everything 
      integrated and our backend is now fully functional. All we really have left to do is finish hooking 
      up axios calls in the frontend and styling. We have a few bugs like missing auto-redirects, but those 
      are easily fixable.
    </p>
    <p>
      For today's weekly question, I'm supposed to discuss our experiences shifting toward UX/UI implementation 
      in the frontend and debugging the backend to improve user experience. We definitely spent a lot of time 
      thinking about these topics are started implementing this week. I'll start talking about frontend first.
    </p>
    <p>
      First of all, we made the decision to switch from LESS to Reactstrap. This freed up a lot of time we would 
      have had to spend creating default classes like containers, buttons, etc. Since nobody on the web team is 
      particularly interested in being a web designer, this lets us spend more time on things like creating a 
      complex API and integrating lots of APIs. 
    </p>
    <p>
      On top of Reactstrap, we decided on a pretty nice color theme based on our research of other educational 
      applications. We found that they use a lot of shades of blue to blue-green; based on the small amount of 
      color theory I know, it seems like these colors put users at ease and can make them feel like the platform 
      is more professional and trustworthy. 
    </p>
    <p>
      The main user flow issues for frontend we still have to tackle are auto-redirecting the user after logging 
      in/out and adjust some of our link flow. For example, right now we have a few extra options in the sidebar 
      nav because we hadn't set up the click flow that leads to "deeper" pages yet.
    </p>
    <p>
      As far as backend debugging for UX goes, we finally got all of the peripheral endpoints finished yesterday. 
      As we implement them, I'm sure we'll find some stuff we could clean up, but as far as I know we have no bugs 
      in our backend.
    </p>
    <p>
      Here is a list of the work that I completed this week:
      <div>
        <h2>Frontend</h2>
          <ul> Ticket 1
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/120">Github PR</a></li>
            <li><a href="https://trello.com/c/rhjnTu4I/163-reactstrap-create-assignment-view">Trello Card</a></li>
          </ul>
          <ul> Ticket 2
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/122">Github PR</a></li>
            <li><a href="https://trello.com/c/yNX6sPFS/164-reactstrap-dashboard-assignment-view">Trello Card</a></li>
          </ul>
          <ul> Ticket 3
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/124">Github PR</a></li>
            <li><a href="https://trello.com/c/OgHbpYBS/178-reactstrap-nav-elements">Trello Card</a></li>
          </ul>
          <ul> Ticket 4
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/126">Github PR</a></li>
            <li><a href="https://trello.com/c/vZqSl8AV/165-reactstrap-dashboard-billing-view">Trello Card</a></li>
          </ul>
          <ul> Ticket 5
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/128">Github PR</a></li>
            <li><a href="https://trello.com/c/yNX6sPFS/164-reactstrap-dashboard-assignment-view">Trello Card</a></li>
          </ul>
          <ul> Ticket 6
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/130">Github PR</a></li>
            <li><a href="https://trello.com/c/MzPnqkhB/177-reactstrap-dashboard-view">Trello Card</a></li>
          </ul>
          <ul> Ticket 7
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/115">Github PR</a></li>
            <li><a href="https://trello.com/c/KeXHBOCY/166-reactstrap-set-up">Trello Card</a></li>
          </ul>
      </div>
      <div>
        <h2>Backend</h2>
          <ul> Ticket 8
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/116">Github PR</a></li>
            <li><a href="https://trello.com/c/ROWKsFEf/132-fix-issue-with-refreshes-on-netlify-deployment">Trello Card</a></li>
          </ul>
          <ul> Ticket 9
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/102">Github PR</a></li>
            <li><a href="https://trello.com/c/hxreetGX/150-teacher-get-list-of-students-assignments">Trello Card</a></li>
            <li><a href="https://trello.com/c/3MoNCftT/149-teacher-get-individual-student">Trello Card</a></li>
            <li><a href="https://trello.com/c/yOJlytxe/131-teacher-get-a-list-of-students-names-instrument-and-level">Trello Card</a></li>
          </ul>
          <ul> Ticket 10
            <li><a href="https://github.com/Lambda-School-Labs/Labs8-MusicMaker/pull/117">Github PR</a></li>
            <li><a href="https://trello.com/c/zrrqUnkn/179-assist-in-backend-debugging">Trello Card</a></li>
          </ul>
      </div>
    </p>
    <p>
      I want to take a closer look at Ticket 8, which covers fixing our Netlify 404 issues.
      Essentially, we were having an issue where refreshing any page but the landing page 
      would cause the app to 404. Let's take a look at the code, then I'll explain what it does: 
      <br />
      <div><img src="https://puu.sh/Ce4Fu/f7c8137e7e.png" alt="Netlify build file"/></div>
      <br />
      As you can see, the actual code is very small. Netlify has a certain issue with single page 
      applications because it saves history based off of the index.html file. Clearly, that page 
      will never change but simply re-render based on the React components being called, so by 
      default React doesn't have a history enabled. This breaks refreshing and typing in links.
      <br />
      This code basically informs Netlify that it's a single page app and enables the history, which 
      fixed all of our issues with just 4 short lines of code.
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

export default BlogEntry4;