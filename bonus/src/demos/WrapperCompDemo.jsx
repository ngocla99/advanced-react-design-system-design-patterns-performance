import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePicker } from "../components/date-picker";

export const WrapperCompDemo = () => {
  const [date, setDate] = React.useState();

  return (
    <div>
      <DatePicker
        label="Select the Payment Date"
        value={date?.toString()}
        onChange={(date) => date && setDate(date)}
      />
    </div>
  );
};
