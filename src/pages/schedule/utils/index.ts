import { endOfMonth, getDaysInMonth } from "date-fns";
import { appointments } from "../../../types";

const sortTreatmentsMonth = (appointments: Array<appointments>) => {
  const output: any = [];
  let dayEndOfMonth;
  let nextMonth;
  appointments.forEach((elm) => {
    dayEndOfMonth = endOfMonth(new Date()).toISOString().split("T")[0].split("-")[2];
    nextMonth = endOfMonth(new Date()).toISOString().split("T")[0].split("-")[1];

    const day = new Date(elm.schedule).toISOString().split("T")[0].split("-")[2];
    const month = new Date(elm.schedule).toISOString().split("T")[0].split("-")[1];

    const totalOfDaysInMonth = getDaysInMonth(new Date(elm.schedule));

    if (Number(month) !== Number(nextMonth)) {
      if (Number(day) <= totalOfDaysInMonth) {
        let sort: Array<appointments> = appointments.sort(
          (a, b) =>
            Number(new Date(a.schedule).toISOString().split("T")[0].split("-")[2]) - Number(new Date(b.schedule).toISOString().split("T")[0].split("-")[2])
        );

        output.push(sort);
      }
    }
  });

  return output[0];
};

const sortTreatmentsWeek = (appointments: Array<appointments>) => {
  const output = [];

  output.push(
    appointments.sort(
      (a, b) => Number(new Date(a.schedule).toISOString().split("T")[0].split("-")[2]) - Number(new Date(b.schedule).toISOString().split("T")[0].split("-")[2])
    )
  );

  return output[0];
};

export { sortTreatmentsMonth, sortTreatmentsWeek };
