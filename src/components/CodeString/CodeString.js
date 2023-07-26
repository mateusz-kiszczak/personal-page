const CodeString = (props) => {
  return (
    <p className="code-string">
      {props.codeString.map((item, index) => {
        return (
          <span 
            className={item.colorClass}
            key={`${index}-${item.text}`}
          >{item.string}
          </span>
        );
      })}
      <span>|</span>
    </p>
  );
}

export default CodeString;
