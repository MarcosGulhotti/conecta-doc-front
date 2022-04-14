import { useEffect, useState } from "react"
import { Header } from "../../components/header"
import { IndicatorCard } from "../../components/indicatorCard"
import { TreatementCard } from "../../components/treatementCard"
import api from "../../services/api"
import { User } from "../../store/types/userTypes"
import { Treatements } from "../../types"
import { DivisorDiv, FixInScreen, PatientsContainer, StyledContainer } from "./style"

const DashboardPage = () => {

    const token = localStorage.getItem("token") || "null"

    const [totalTreatment, setTotalTreatment] = useState<number>(0)
    const [canceledTreatment, setCanceledTreatment] = useState<number>(0)
    const [treatements, setTreatements] = useState<Array<Treatements>>([])



    useEffect(() => {
        const getTreatments = async () => {
            const req = await api.get("/doctor/patients/all", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": `Bearer: ${token}`
                }
            })

            const allTreat: Array<Treatements> = []
            const canceledTreat: Array<Treatements> = []

            const date = new Date().toISOString().split("T")[0]

            req.data.forEach((elm: Treatements) => elm.status === "Agendado" &&
                new Date(elm.schedule).toISOString().split("T")[0].split("-")[2] === date.split("-")[2]
                ?
                allTreat.push(elm)
                :
                null
            )

            req.data.forEach((elm: Treatements) => elm.status === "Cancelado" &&
                new Date(elm.schedule).toISOString().split("T")[0].split("-")[2] === date.split("-")[2]
                ?
                canceledTreat.push(elm)
                :
                null
            )

            setTreatements(allTreat)
            setTotalTreatment(allTreat.length)
            setCanceledTreatment(canceledTreat.length)
        }
        getTreatments()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Header />
            <StyledContainer>
                <IndicatorCard text="Total de atendimentos para hoje" number={totalTreatment} />
                <h1>Agendamentos do dia</h1>
                <IndicatorCard text="Atendimentos cancelados" number={canceledTreatment} />
            </StyledContainer>
            <DivisorDiv />
            <FixInScreen>
                <PatientsContainer>
                    {treatements.map((elm, i) => <TreatementCard key={i} {...elm} />)}
                </PatientsContainer>
            </FixInScreen>
        </div>
    )
}

export default DashboardPage