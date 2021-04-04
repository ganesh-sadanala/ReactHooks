import { FaStar } from "react-icons/fa";

export default function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "green"} onClick={onSelect} />;
}
