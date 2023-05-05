import React, { useState } from "react";

function HideElement() {
  const [isVisible, setIsVisible] = useState(true);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h2>Hide Element</h2>
      <button onClick={handleButtonClick}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <p>This element is visible!</p>}
    </div>
  );
}

export default HideElement;
