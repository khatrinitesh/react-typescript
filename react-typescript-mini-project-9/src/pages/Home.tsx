import React from "react";
import Preloader from "../component/Preloader";
import MeetTheTeam from "../component/MeetTheTeam";
import { TEAM_MEMBERS } from "./../constants/constants";

const Home: React.FC = () => {
  return (
    <div className="content">
      <h2>Home</h2>
      <Preloader />
      {TEAM_MEMBERS.map((member) => (
        <MeetTheTeam key={member.id} />
      ))}
    </div>
  );
};

export default Home;
