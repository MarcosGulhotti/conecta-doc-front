import { endOfMonth, getDaysInMonth } from "date-fns"
import { Treatements } from "../../../types";


const sortTreatmentsMonth = (treatements: Array<Treatements>) => {
    const output: any = []
    let dayEndOfMonth
    let nextMonth
    treatements.forEach((elm) => {
        dayEndOfMonth = endOfMonth(new Date()).toISOString().split("T")[0].split("-")[2]
        nextMonth = endOfMonth(new Date()).toISOString().split("T")[0].split("-")[1]

        const day = new Date(elm.schedule).toISOString().split("T")[0].split("-")[2]
        const month = new Date(elm.schedule).toISOString().split("T")[0].split("-")[1]

        const totalOfDaysInMonth = getDaysInMonth(new Date(elm.schedule))

        if (Number(month) !== Number(nextMonth)) {
            if (Number(day) <= totalOfDaysInMonth) {
                let sort: Array<Treatements> = treatements.sort((a, b) => Number(new Date(a.schedule).toISOString().split("T")[0].split("-")[2]) - Number(new Date(b.schedule).toISOString().split("T")[0].split("-")[2]))

                output.push(sort)
            }
        }
    })


    return output[0]

}

const sortTreatmentsWeek = (treatements: Array<Treatements>) => {
    const output = []

    output.push(treatements.sort((a, b) => Number(new Date(a.schedule).toISOString().split("T")[0].split("-")[2]) - Number(new Date(b.schedule).toISOString().split("T")[0].split("-")[2])))

    return output[0]

}

export { sortTreatmentsMonth, sortTreatmentsWeek }