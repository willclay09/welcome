import React from "react";

function Display(props) {
  if (props.category === undefined) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="Question">
      <h2>Category:{props.category.title}</h2>

      <h3>Question:{props.question}</h3>

      <h4>Point Value:{props.value}</h4>
    </div>
  );
}

export default Display;
