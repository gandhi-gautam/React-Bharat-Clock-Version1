function Time() {
  let date = new Date();
  return (
    <center className="container">
      <p>
        This is the current time: {date.toLocaleDateString()} -{" "}
        {date.toLocaleTimeString()}
      </p>
    </center>
  );
}

export default Time;
