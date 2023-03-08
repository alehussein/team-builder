import styled from 'styled-components';
const Form = (props) => {
   
    const handleChange = evt => {
        const {name, value} = evt.target;
        props.change(name, value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        props.submit();
    }


  const MasterDiv = styled.div`
  font-size: 1.2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #1C6EA4;
  background: #4caf50;
  box-shadow: 5px 5px 15px 5px #000000;
  border-radius: 12px;
  color: white;
  font-weight: 700;
  `

  const ButtonTeam = styled.input`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: #f44336;`

     return (
        <MasterDiv>
            
        <form onSubmit={handleSubmit}>
            
            <label>Name
            <input 
            value={props.values.name}
            placeholder='Enter your Name'
            name='name'
            onChange={handleChange} 
            />
            </label>&nbsp;
            <label>Email
            <input 
            value={props.values.email}
            placeholder='Enter your Email'
            name='email'
            onChange={handleChange} 
            />
            </label>&nbsp;
            <label>Role 
            <select 
            id=''
            value={props.values.role}
            name='role'
            onChange={handleChange} >
                <option />
                <option>Backend engineer</option>
                <option>Frontend engineer</option>
                <option>Designer</option>
                <option>Other</option>
            </select>
           
            </label>&nbsp;

            {/* team */}

            <label>Team 
            <select 
            id=''
            value={props.values.team}
            name='team'
            onChange={handleChange} >
                <option />
                <option>Clover-🍀</option>
                
            </select>
            </label>
            

            <ButtonTeam type="submit" value='Create You Team' />

        </form>
        </MasterDiv>
     )

}


export default Form;
