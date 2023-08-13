import arrowDownIcon from "../../img/icons/header/arrow-down.svg";

const GoDownButton = (props) => {
  return (
    <button className="go-down-button" onClick={() => props.handleScrollDown()}>
      <img src={arrowDownIcon} alt="Arrow down" />
    </button>
  );
}

export default GoDownButton;
