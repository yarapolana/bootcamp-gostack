import React from "react";

import "./App.css";

import Header from "./components/Header";
import api from "./services/api";

export default function App() {
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    api.get("/projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    // projects.push(`Novo projecto ${Date.now()}`)
    // This is not working with React
    // You cant alter directly the variables / arrays
    try {
      const response = await api.post("projects", {
        title: `Novo project ${Date.now()}`,
        owner: "Yara Polana",
      });

      const project = response.data;

      setProjects([...projects, project]);
    } catch (err) {}

    // setProjects([...projects, `Novo project ${Date.now()}`]);
  }

  return (
    <div>
      <Header title="Millionaire Yara"></Header>
      <ul>
        {projects &&
          projects.map((project) => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="submit" onClick={handleAddProject}>
        Add Dream
      </button>
    </div>
  );
}
