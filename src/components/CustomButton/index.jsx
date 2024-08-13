import "./style.css";

const CustomButton = ({ bgColor = "bg-red-600", icon, label, onClick}) => {
    return (
      <button className={`Btn ${bgColor}`} onClick={onClick}>
        <div className="">{icon}</div>
        <div className="text font-asap">{label}</div>
      </button>
    );
  };

export default CustomButton;
