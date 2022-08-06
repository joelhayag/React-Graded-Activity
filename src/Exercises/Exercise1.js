const Exercise1 = () => {

  function handleAlertClick() {
    alert('Clicked!');
  }

  return (
    <div className="text-left mt-5">
      <button className="btn btn-primary"
        onClick={handleAlertClick}>Click Me</button>
    </div>
  );
};

export default Exercise1;
