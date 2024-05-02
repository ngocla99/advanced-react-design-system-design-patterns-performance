import ReactDatePicker from "react-datepicker";

export const DatePicker = (props) => {
  const { label, ...otherProps } = props;

  return (
    <div>
      {label && <label>{label}</label>}
      <div>
        <ReactDatePicker {...otherProps} />
      </div>
    </div>
  );
};
