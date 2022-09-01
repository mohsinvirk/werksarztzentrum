import React, { useState } from "react";

function Collapse({ children }) {
  const [visible, handleVisible] = useState(false);
  return <div>{children(visible, () => handleVisible(!visible))}</div>;
}

export default Collapse;
