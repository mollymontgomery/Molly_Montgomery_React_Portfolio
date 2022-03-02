import React from 'react';

function Nav(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <nav>
      <ul>
        <li>
          <span onClick={() => setCurrentTab("about")}>About Me</span>
        </li>
        <li>
        <span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
        </li>
        <li>
          <span onClick={() => setCurrentTab("contact")}>Contact</span>
        </li>
        <li>    
          <span onClick={() => setCurrentTab("resume")}>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;