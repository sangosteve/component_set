import Input from "../Input";
import { Calendar as Picker } from "./Calendar";
import React, { useState } from "react";
import { Calendar } from "lucide-react";
import dayjs from "dayjs";
const DatePicker = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  return (
    <div className="relative">
      <div className="relative hover:cursor-pointer">
        <Input value={dayjs(selectedDate).format("DD/MM/YYYY")} />
        <span
          onClick={() => {
            setOpen(!open);
            console.log(open);
          }}
          className="flex h-full items-center absolute right-0 top-0"
        >
          <Calendar className="mr-2 text-gray-4" size={16} />
        </span>
      </div>
      <Picker
        open={open}
        setOpen={setOpen}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
};

export default DatePicker;
