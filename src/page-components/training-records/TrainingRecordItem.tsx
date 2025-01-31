import { TrainingRecordDto } from "@/backend-layer/_internal/trainingRecord/TrainingRecordSliceInterface";
import { trainingTypeStringDataFromBackToString } from "./trainingTypeEnumToString";
import { ReactNode } from "react";
import { convertLocalDateTimeToDateWithDotsAndTime } from "@/backend-layer/_internal/date-utils/convertDate";

const TrainingRecordLabel = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-[14px] leading-4 text-gray-900 font-medium">
      {children}
    </div>
  );
};

const TrainingRecordValue = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-[16px] leading-4 text-black font-semibold">
      {children}
    </div>
  );
};

export const TrainingRecordItem = ({
  trainingRecord,
}: {
  trainingRecord: TrainingRecordDto;
}) => {
  return (
    <div className="w-full max-w-[400px] flex flex-col gap-4 p-4 rounded-lg bg-slate-100">
      <div className="flex justify-between">
        <div className="flex">
          <TrainingRecordLabel>Tip treninga:</TrainingRecordLabel>&nbsp;
          <TrainingRecordValue>
            {trainingTypeStringDataFromBackToString(
              Number.parseInt(trainingRecord.trainingType)
            )}
          </TrainingRecordValue>
        </div>

        <div className="flex">
          <TrainingRecordLabel>Potrošene kalorije:</TrainingRecordLabel>
          &nbsp;
          <TrainingRecordValue>
            {trainingRecord.caloriesBurned}
          </TrainingRecordValue>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex">
          <TrainingRecordLabel>Težina treninga:</TrainingRecordLabel>
          &nbsp;
          <TrainingRecordValue>{trainingRecord.difficulty}</TrainingRecordValue>
        </div>

        <div className="flex">
          <TrainingRecordLabel>Umor:</TrainingRecordLabel>
          &nbsp;
          <TrainingRecordValue>{trainingRecord.tiredness}</TrainingRecordValue>
        </div>
      </div>

      {trainingRecord.note !== "" && (
        <div className="flex">
          <TrainingRecordLabel>Beleška:</TrainingRecordLabel>
          &nbsp;
          <TrainingRecordValue>{trainingRecord.note}</TrainingRecordValue>
        </div>
      )}

      <div className="flex">
        <TrainingRecordLabel>Datum:</TrainingRecordLabel>
        &nbsp;
        <TrainingRecordValue>
          {convertLocalDateTimeToDateWithDotsAndTime(
            trainingRecord.dateAndTimeOfTheTraining
          )}
        </TrainingRecordValue>
      </div>
    </div>
  );
};
