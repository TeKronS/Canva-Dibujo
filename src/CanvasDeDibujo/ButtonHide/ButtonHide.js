import { useState } from "react";
import { Body } from "./styles";

export const ButtonHidde = () => {
  const [visible, setVisible] = useState(false);

  const toolsElement = document.getElementById("tools");
  const lineElement = document.getElementById("line");
  if (toolsElement && lineElement) {
    if (visible) {
      toolsElement.classList.remove("hiddentools");
      lineElement.classList.remove("hiddenline");
    } else {
      toolsElement.classList.add("hiddentools");
      lineElement.classList.add("hiddenline");
    }
  }
  function handledClick(e) {
    if (visible) {
      e.target.style.transform = "translateX(0)";
      setVisible(false);
    } else {
      e.target.style.transform = "translateX(50px)";

      setVisible(true);
    }
  }

  return (
    <Body onClick={handledClick}>{visible ? "Ocultar" : "Herramientas"}</Body>
  );
};
