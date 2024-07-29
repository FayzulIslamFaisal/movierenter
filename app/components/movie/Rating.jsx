import Image from "next/image";
import { FaStar } from "react-icons/fa";
const Rating = ({ value }) => {
  const starIcon = Array(value).fill(<FaStar />);
  // console.log(starIcon);
  return <i className=" flex ">{starIcon}</i>;
};

export default Rating;
