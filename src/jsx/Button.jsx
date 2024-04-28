import "../css/Button.css";

function Button({ type, visual, text, onClick, className }) {
  let button_type = "button";
  if (type === "submit") {
    button_type = "submit";
  }
  let combined_class_name = visual;
  if (className) {
    combined_class_name = combined_class_name + " " + className;
  }
  return (
    <button
      type={button_type}
      className={combined_class_name}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
