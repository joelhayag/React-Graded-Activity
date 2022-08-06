import Card from 'react-bootstrap/Card';

const Button = (props) => {

  function handleAlertClick() {
    alert('You clicked on' + " " + props.name);
  }

  return (

    <button className="btn btn-primary me-5"
      onClick={handleAlertClick}>
      {
      props.name
    } </button>

  );
};

export default Button;
