import arrowDownIcon from "../../img/icons/header/arrow-down.svg";

const GoDownButton = (props) => {
  return (
    <a className="go-down-button" onClick={() => props.handleScrollDown()}>
      <img src={arrowDownIcon} alt="Arrow down" />
    </a>
  );
}

export default GoDownButton;
