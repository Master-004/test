import { useState } from "react";
import { useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function Welcome() {
  return <h1> Welcome to the NCAA Basketball information website</h1>;
}

function TeamCard({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <div>
        <h2>{school}</h2>
        <h3>Mascot: {name}</h3>
        <h3>
          Location: {city},{state}
        </h3>
        <br></br>
      </div>
    </>
  );
}

function TeamLists() {
  const [teams, setTeams] = useState<
    { school: string; name: string; city: string; state: string }[]
  >([]);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch("/assets/CollegeBasketballTeams.json")
      .then((response) => response.json())
      .then((data) => {
        setTeams(data.teams); // Assuming your JSON structure is like { "teams": [...] }
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <>
      {teams.map((singleTeam) => (
        <TeamCard
          school={singleTeam.school}
          name={singleTeam.name}
          city={singleTeam.city}
          state={singleTeam.state}
        />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <TeamLists />
    </>
  );
}

export default App;
