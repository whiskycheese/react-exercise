import { useState } from "react";

const EachPost = ({ post: { title, body } }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <li>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsClicked(true);
        }}
      >
        {title}
      </a>
      {isClicked && <p>{body}</p>}
    </li>
  );
};

export default EachPost;
