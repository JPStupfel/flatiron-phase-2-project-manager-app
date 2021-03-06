import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import  '../App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




function UserCard({user, handleDeleteUser, projects, currentUser}) {

  const usersProjects =projects.filter(e=>e.author===user.name)

  const userCompletedProjects = usersProjects.filter(e=>e.status==='Completed')
  

function onDelete(event){
  
  fetch(`http://localhost:4000/users/${user.id}`, {method: "DELETE"});
  
  handleDeleteUser(user.id)

}
  return (
  <div className="App">
        
        <Card>
            <Card.Img variant="top" src={user.image}/>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                {`${user.name} has created ${usersProjects.length } projects, and completed ${userCompletedProjects.length} projects`}
                
              </Card.Text>
              {currentUser.name === user.name || currentUser.name === 'admin' ? <button onClick={onDelete}>Delete this Team Member.</button> : null}
            </Card.Body>
          </Card>

  </div>
  );
} 

export default UserCard;
