import React from 'react';
import '../pages/Title.css';
import github from './../pages/github.png'
import linkedin from './../pages/linkedin.png'
import portfolio from './../pages/portfolio.png'
import note from './../pages/note.png'
import weather from './../pages/weather.png'
import password from './../pages/password.png'
import project1 from './../pages/project1.png'
import project3 from './../pages/project3.jpeg'

export default function Home() {
  return (
    <div>
      <div className="Title">
        <h1>Home Page</h1>
      </div>
      <div className='header'>
        <h1>Hello My name is Giulia Shelton</h1>
      </div>

      <div class="card-deck">
        <div class="card">
          <img src={project1} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">First Project</h5>
            <p class="card-text">For this project I worked with a team of four people. We had to use an api to connect to our site. As a team we decided to make a sports web application by using a sports api to collect our data.</p>
          </div>
        </div>

        <div class="card">
          <img src={project3} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Third Project</h5>
            <p class="card-text">In project three we had to make a react website that had multiple levels of data and pages. On this project I was only working with one other person. We came up with an idea to make an adoption site. So that way we could meet our MVP goal. We did this by having a page that showed all dogs and then once you click on a single dog you will be brought to a new page that shows more info about that specific dog. </p>
          </div>
        </div>
        <div class="card">
          <img src={password} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Password Generator</h5>
            <p class="card-text">This was a homework assignment for my bootcamp that demonstrated how to set up a way to create a password for a user.</p>
          </div>
        </div>

      <div class="card">
        <img src= {portfolio} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Portfolio</h5>
          <p class="card-text">My Portfolio was one of the first assignments I completed. I was very proud of my CSS and the way the page was displayed.</p>
        </div>
      </div>

      <div class="card">
        <img src={weather} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Third Party Api</h5>
          <p class="card-text">For this homework assignment we had to build a weather app. This used a third party api from the weather api dashboard that allowed me to collect specific data to render on the page. It was very similar to our first project.</p>
        </div>
      </div>

      <div class="card">
        <img src={note} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Note-Taker</h5>
          <p class="card-text">The note taker app that I developed was also a homework assignment. For this one my main challenge was getting my site deployed to heroku.</p>
        </div>
      </div>
      </div>

      
        <div className="i-icons">
          <img src={github} alt="" />
          <img src={linkedin} alt="" />
        </div>
        

      <div class="footer">
        <p>Thank you for visting!</p>
      </div>
    </div>
  );
}
