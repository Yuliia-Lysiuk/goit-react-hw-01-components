import { Label, Percentage } from "./StatisticsItem.styled"

export function StatisticsItem({label, percentage}) {
    return (<>
       <Label >{label}</Label>
      <Percentage >{percentage}%</Percentage></>
   ) 
}

