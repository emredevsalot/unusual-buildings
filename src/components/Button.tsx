import { Link } from "react-router-dom";

type Props = {
  url: string;
  text: string;
};

const Button = ({ url, text }: Props) => {
  return (
    <Link to={url}>
      <div className="btn">
        <svg width="220" height="62">
          <rect
            x="5"
            y="5"
            rx="0"
            fill="none"
            stroke="url(#grad1)"
            width="210"
            height="50"
          ></rect>
        </svg>
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default Button;
