import {useState} from "react";

const Exercise3 = () => {

  const [count, setCount] = useState(0);

  return (
    <div className="text-left mt-5">
      <h5>Button has been clicked: {
        count + " "
      }
        times</h5>
      <button className="btn btn-primary"
        onClick={
          () => setCount(count + 1)
      }>
        Click Me
      </button>
    </div>
  );

};

export default Exercise3;
