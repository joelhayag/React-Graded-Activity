import ListGroup from 'react-bootstrap/ListGroup';

const Animal = (props) => {

  return (
    <ListGroup>{
      props.name
    }</ListGroup>
  );
}
export default Animal;
