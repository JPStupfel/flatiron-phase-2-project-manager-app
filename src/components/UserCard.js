import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import  '../App.css';




function UserCard({user, handleDeleteUser}) {

  
function onDelete(event){
  
  fetch(`http://localhost:4000/users/${user.id}`, {method: "DELETE"});
  
  handleDeleteUser(user.id)

}

  return (
  <div className="App">
        
    <Card>

      <Card.Img variant="top" src={user.image} />

      <Card.Body>
        <Card.Title>{user.name }</Card.Title>
        <Card.Text>
        Projects Created: {user["Projects Created"]}
        </Card.Text>
      </Card.Body>

      <DropdownButton id="dropdown-basic-button" title="Delete User">
        <Dropdown.Item onClick={onDelete} href="#/action-1">{`Delete ${user.name}?`}</Dropdown.Item>
       
      </DropdownButton>


      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>

    </Card>

  </div>
  );
} 

export default UserCard;
