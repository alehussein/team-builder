import './App.css';
import Form from './Componets/Form';
import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [teams, setTeams] = useState([{ name: 'Team 1', members: [] }]);
  const [values, setValues] = useState({ name: '', email: '', role: '', team:'' });
  const [editIndex, setEditIndex] = useState(null);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

  const addMember = () => {
    const updatedTeams = [...teams];
    updatedTeams[currentTeamIndex].members.push(values);
    setTeams(updatedTeams);
    setValues({ name: '', email: '', role: '', team:'' });
  };

  const editTeamName = (index, newName) => {
    const updatedTeams = [...teams];
    updatedTeams[index].name = newName;
    updatedTeams[index].members.forEach((member) => {
      member.team = newName;
    });
    setTeams(updatedTeams);
  }

  const editMember = (editedData) => {
    const updatedTeams = [...teams];
    updatedTeams[currentTeamIndex].members = updatedTeams[currentTeamIndex].members.map((member, index) => {
      if (index === editIndex) {
        return { ...editedData };
      } else {
        return member;
      }
    });
    setTeams(updatedTeams);
    setEditIndex(null);
  };

  const onSubmit = () => {
    if (editIndex !== null) {
      editMember(values);
    } else {
      addMember();
    }
  };

  const onEdit = (index) => {
    setEditIndex(index);
    setValues({ ...teams[currentTeamIndex].members[index] });
  };

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const onTeamSelect = (index) => {
    setCurrentTeamIndex(index);
  };
  const membersByTeam = teams.map((team) => team.members);

  const MasterDiv = styled.div`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: #fdd835;
  border-radius: 12px;`
  


  const ButtonTeam = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: #2196f3;`

  const Members = styled.div`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #1C6EA4;
  background: #A48A28;
  color: white;`

  const EditMember = styled.button`
  background: #2196f3;
  border-radius: 3px;
  `
  const Hone = styled.h1`
  color: #ffffff; 
  font-family: 
  'Raleway',sans-serif; 
  font-size: 62px; 
  font-weight: 800; 
  line-height: 72px; 
  margin: 0 0 24px; 
  text-align: center; 
  text-transform: uppercase; 
  text-shadow: 1px 2px 2px black;
  `
  return (
    
    <MasterDiv className="App">
      <Hone>Team Builder</Hone>
      <div>
        {teams.map((team, index) => (
          <div key={index}>
            <ButtonTeam onClick={() => onTeamSelect(index)}>
              {team.name}
            </ButtonTeam>
            <ButtonTeam onClick={() => editTeamName(index, prompt('Enter new team name:'))}>
              Edit team name
            </ButtonTeam>
          </div>
       

        ))}
      </div>
      {membersByTeam[currentTeamIndex].map((member, index) => {
        return (
          <Members key={index}>
            {member.name}, {member.email}, {member.role}, {member.team}&nbsp;&nbsp;
            <EditMember onClick={() => onEdit(index)}>Edit</EditMember>
          </Members>
        );
      })}
      <Form
        values={values}
        change={onChange}
        submit={onSubmit}
        memberToEdit={editIndex !== null ? teams[currentTeamIndex].members[editIndex] : null}
      />
    </MasterDiv>
  );
}

export default App;