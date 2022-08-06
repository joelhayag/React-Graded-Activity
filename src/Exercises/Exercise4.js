const Exercise4 = () => {

  const animals = [
    'dog',
    'cat',
    'chicken',
    'cow',
    'sheep',
    'horse'
  ];

  const listAnimals = animals.map((animal) => <li>{animal}</li>);

  return (

    <div className="text-left mt-5">

      <ul>{listAnimals}</ul>

    </div>
  );
};

export default Exercise4;
