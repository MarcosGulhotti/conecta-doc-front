import { useEffect, useState } from "react";
import { Header } from "../../components/header"
import { TreatementCard } from "../../components/treatementCard";
import api from "../../services/api";
import { User } from "../../store/types/userTypes";
import { FixInRightSide, FixInScreen, PatientsContainer } from "./style";
import { getWeekOfMonth, isWeekend, endOfWeek, endOfMonth, getDaysInMonth } from 'date-fns'
import { sortTreatmentsMonth, sortTreatmentsWeek } from "./utils";
import { Treatements } from "../../types";
import { SwitchButton } from "../../components/switchButton";
import { Button } from "../../components/button";

const SchedulePage = () => {
    const token = localStorage.getItem("token") || "null"


    const [treatementsMonth, setTreatementsMonth] = useState<Array<Treatements>>([])
    const [treatementsWeek, setTreatementsWeek] = useState<Array<Treatements>>([])

    const [monthView, setMonthView] = useState<boolean>(true)

    useEffect(() => {
        const getTreatments = async () => {
            const req = await api.get("/doctor/patients/all", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": `Bearer: ${token}`
                }
            })

            const allTreatementsMonth: Array<Treatements> = []
            const allTreatementsWeek: Array<Treatements> = []

            const date = new Date().toISOString().split("T")[0]

            req.data.forEach((elm: Treatements) => {

                if (elm.status === "Agendado" && new Date(elm.schedule).toISOString().split("T")[0].split("-")[1] === date.split("-")[1]) {
                    allTreatementsMonth.push(elm)
                }

            }
            )


            req.data.forEach((elm: Treatements) => {
                const Week = new Date(elm.schedule).toISOString().split("T")[0]

                if (elm.status === "Agendado" && Week.split("-")[1] === date.split("-")[1] && getWeekOfMonth(new Date(Week)) === getWeekOfMonth(new Date(date))) {
                    if (!isWeekend(new Date(Week))) {
                        allTreatementsWeek.push(elm)
                    }
                }
            }
            )

            const sortedTreatmentsWeek = sortTreatmentsWeek(allTreatementsWeek)

            const sortedTreatmentsMonth = sortTreatmentsMonth(allTreatementsMonth)

            setTreatementsMonth(sortedTreatmentsMonth)
            setTreatementsWeek(sortedTreatmentsWeek)
        }
        getTreatments()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <div>
            <Header />
            <FixInRightSide>
                <SwitchButton monthOrWeek={monthView} textButtonLeft="Semanal" textButtonRight="Mensal" funcButtonLeft={() => setMonthView(false)} funcButtonRight={() => setMonthView(true)} />
            </FixInRightSide>
            <FixInScreen>
                <PatientsContainer>
                    {monthView ? treatementsMonth.map((elm, i) => <TreatementCard key={i} {...elm} />) : treatementsWeek.map((elm, i) => <TreatementCard key={i} {...elm} />)}
                </PatientsContainer>
            </FixInScreen>
            <FixInRightSide>
                <Button type="button" width="250px" height="55px" func={() => null} text="Criar nova consulta" />
            </FixInRightSide>
        </div>
    )
}

export default SchedulePage;