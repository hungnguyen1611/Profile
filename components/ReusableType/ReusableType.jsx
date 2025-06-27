/* eslint-disable react/prop-types */

import { TypeAnimation } from "react-type-animation";

export default function ReusableType({
  texts = [],
  delay = 2000,
  speed = 10,
  repeat = Infinity,
  className = "",
}) {
  // Create a string that alternates between text and delay
  const sequence = texts.flatMap((text) => [text, delay]);

  return (
    <TypeAnimation
      sequence={sequence}
      speed={speed}
      repeat={repeat}
      className={className}
    />
  );
}
