import { PatientDetailItemProps } from "../types"

export const PatienDetailItem = ({label, data}: PatientDetailItemProps) => {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">{label}: {''}
      <span className="font-normal normal-case">{data}</span>
    </p>
  )
}
