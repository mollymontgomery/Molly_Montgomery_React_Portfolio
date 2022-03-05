import React from 'react';

function About() {
  return (
    <section>
      <div class="header">
          <img
          src={require('../../assets/images/cover.jpeg')}
          alt="about-me"
          className="photo"
        /><div>About Me</div>
          </div>

      <div>
        <p>
        I am working towards gaining the skills necessary to be a fullstack developer 
        at the University of Minnesota Coding Bootcamp. Currently, I am working as a 
        Facility Manager and have my Bachelor's degree from the University of Northern Iowa.
        </p>
        <p>
        I am located in the Kansas City metro area. In my free time I love to explore the city 
        with my husband and two corgis. I spend a lot of time outdoors, adding to my plant collection,
        and working on creative projects.
        </p>
      </div>
    </section>
  );
}

export default About;