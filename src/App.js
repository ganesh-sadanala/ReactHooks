import React, { useState } from "react";
import StarRating from "./StarRating";

export default function App({ name }) {
  return <StarRating totalStars={10} />;
}
