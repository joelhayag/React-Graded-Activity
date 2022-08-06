import Animal from "./components/Animal";
import ListGroup from 'react-bootstrap/ListGroup';

const Exercise5 = () => {

  const animals = [
    'dog',
    'cat',
    'chicken',
    'cow',
    'sheep',
    'horse'
  ];

  const listAnimals = animals.map((animal) => <ListGroup.Item>{animal}</ListGroup.Item>);

  return (

    <div className="text-left mt-5">
      <Animal name={listAnimals}/>
    </div>
  );
};

export default Exercise5;
