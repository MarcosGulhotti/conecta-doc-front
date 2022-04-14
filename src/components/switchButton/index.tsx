import { StyledLeftButton, StyledRightButton } from "./style"

interface SwitchButtonProps {
    textButtonLeft: string
    funcButtonLeft: () => void

    textButtonRight: string
    funcButtonRight: () => void

    monthOrWeek: boolean

}


export const SwitchButton = ({
    textButtonLeft,
    funcButtonLeft,
    textButtonRight,
    funcButtonRight,
    monthOrWeek
}: SwitchButtonProps) => {
    return (
        <div>
            <StyledLeftButton monthOrWeek={monthOrWeek} onClick={funcButtonLeft}>{textButtonLeft}</StyledLeftButton>
            <StyledRightButton monthOrWeek={monthOrWeek} onClick={funcButtonRight}>{textButtonRight}</StyledRightButton>
        </div>
    )
}