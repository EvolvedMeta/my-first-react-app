import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  // children is a predefined keyword
  return <div className={classes}>{props.children}</div>;
};

export default Card;
