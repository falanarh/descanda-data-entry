import Select from "react-select";
import "./style.css";
import zIndex from "@mui/material/styles/zIndex";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    padding: "5px",
    fontSize: "16px",
    backgroundColor: "#f9f5e5",
    border: state.isFocused
      ? "2px solid #D95F59"
      : "2px solid rgba(217, 95, 89, 0.5)",
    // borderColor: state.isFocused ? '#D95F59' : 'rgba(217, 95, 89, 0.5)',
    borderRadius: "5px",
    boxShadow: state.isFocused ? "0 0 0 1px #D95F59" : "none",
    "&:hover": {
      borderColor: "#D95F59",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#64748b", // slate-500
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "inherit",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "5px",
    // boxShadow: '0 4px 6px rgba(217, 95, 89)',
    border: "2px solid rgba(217, 95, 89, 0.5)",
    backgroundColor: "#f9f5e5",
    padding: "5px",
    zIndex: 15,
  }),
  option: (provided, state) => ({
    ...provided,
    borderRadius: "2px",
    backgroundColor: state.isFocused ? "#D95F59" : "#f9f5e5",
    color: state.isFocused ? "#f9f5e5" : "#D95F59",
    padding: "15px",
    margin: "0px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#D95F59",
      color: "#f9f5e5",
      borderRadius: "5px",
    },
  }),
};

const CustomSelect = ({ label, options, value, onChange, isDisabled }) => {
  return (
    <div className="relative flex flex-col w-full">
      <label className="text-porange text-[14px] font-semibold relative top-3 ml-[7px] px-[3px] bg-base w-fit z-10">
        {label}
      </label>
      <Select
        value={options.find((option) => option.value === value)}
        onChange={(selectedOption) => onChange(selectedOption ? selectedOption.value : "")}
        options={options}
        styles={customStyles}
        placeholder={`Pilih ${label}`}
        className="mt-1"
        classNamePrefix="react-select"
        isSearchable={false}
        isDisabled={isDisabled}
      />
    </div>
  );
};

export default CustomSelect;
