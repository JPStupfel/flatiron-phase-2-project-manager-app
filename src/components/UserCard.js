import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button';
import  '../App.css';




function UserCard({user}) {
  return (
    <div className="App">
        Hello
    <Card>
    <Card.Img variant="top" src={user.image} />
    <Card.Body>
      <Card.Title>{user.name }</Card.Title>
      <Card.Text>
      Projects Created: {user["Projects Created"]}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </div>
  );
} 

export default UserCard;
