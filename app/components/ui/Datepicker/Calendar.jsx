"use client";
import React, { useState, useRef, useEffect } from "react";
import { generateDate, months } from "./utils/calendar";
import cn from "./utils/cn";
import dayjs from "dayjs";
import { ChevronLeft, ChevronRight } from "lucide-react";
export const Calendar = ({ open, setOpen, selectedDate, setSelectedDate }) => {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const [today, setToday] = useState(dayjs());

  return (
    <div
      className={`w-64 h-64 ${
        !open && "hidden"
      }   bg-white rounded-lg drop-shadow-md absolute left-0 right-0 top-10 z-50`}
      id="calendar"
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-2">
        <h1 className="text-body-small-medium">
          {months[today.month()]} {today.year()}
        </h1>
        <div className="flex items-center text-caption">
          <ChevronLeft
            onClick={() => setToday(today.month(today.month() - 1))}
            className=" mr-2 hover:cursor-pointer"
            size={18}
          />
          <ChevronRight
            onClick={() => setToday(today.month(today.month() + 1))}
            className="hover:cursor-pointer"
            size={18}
          />
        </div>
      </div>

      <div className="w-full grid grid-cols-7 bg-white">
        {days.map((day, index) => (
          <h3
            className="h-12 grid place-content-center text-body-small text-gray-4"
            key={index}
          >
            {day}
          </h3>
        ))}
      </div>
      <div className="w-full grid grid-cols-7 bg-white">
        {generateDate(today.month(), today.year()).map(
          ({ currentMonth, date, today }, index) => (
            <div
              className={`h-12  grid place-content-center text-body-small`}
              key={index}
            >
              <h1
                className={cn(
                  currentMonth ? "" : "text-gray-3",
                  today ? "bg-blue-9 text-white" : "",
                  selectedDate.toDate().toDateString() ===
                    date.toDate().toDateString()
                    ? "bg-gray-12 text-white"
                    : "",
                  `w-7 h-7 grid place-content-center rounded-full hover:cursor-pointer`
                )}
                onClick={() => {
                  setSelectedDate(date);
                  setOpen(false);
                }}
              >
                {date.date()}
              </h1>
            </div>
          )
        )}
      </div>
    </div>
  );
};
