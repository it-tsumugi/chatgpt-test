import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #a1caf1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const MenuItem = styled.button`
  border: none;
  background-color: inherit;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: #a1caf1;
  }
`;

const TabContent = styled.div`
  width: 80%;
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  line-height: 1.5;
`;

const SkillsContent = () => (
  <TabContent>
    <h2>Skills</h2>
    <ul>
      <li>React</li>
      <li>TypeScript</li>
      <li>JavaScript</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </TabContent>
);

const ExperienceContent = () => (
  <TabContent>
    <h2>Experience</h2>
    <ul>
      <li>Front-end engineer at Company A (2018-2020)</li>
      <li>Front-end engineer at Company B (2020-2022)</li>
      <li>Freelance front-end engineer (2022-present)</li>
    </ul>
  </TabContent>
);

const App = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <h1>My Portfolio</h1>
      <Menu>
        <MenuItem onClick={() => handleTabClick("skills")}>Skills</MenuItem>
        <MenuItem onClick={() => handleTabClick("experience")}>
          Experience
        </MenuItem>
      </Menu>
      {activeTab === "skills" ? <SkillsContent /> : <ExperienceContent />}
    </Container>
  );
};

export default App;
