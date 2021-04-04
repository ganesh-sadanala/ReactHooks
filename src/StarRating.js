import { useState } from "react";
import createArray from "./helpers";
import Star from "./Star";

export default function StarRating({ totalStars }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((data, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        ></Star>
      ))}
      <p>
        {selectedStars} / {totalStars}
      </p>
    </>
  );
}
