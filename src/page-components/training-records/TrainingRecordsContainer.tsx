import { TrainingRecordItem } from "./TrainingRecordItem";
import { useFetchTrainingRecordsIfNeeded } from "@/backend-layer/_internal/trainingRecord/useFetchTrainingRecordsIfNeeded";
import { useTrainingRecords } from "@/backend-layer/trainingRecord";

// const data: TrainingRecordDto[] = [
//   {
//     id: 1,
//     caloriesBurned: 500,
//     dateAndTimeOfTheTraining: "aaa",
//     difficulty: 5,
//     note: "",
//     tiredness: 6,
//     trainingType: "CARDIO",
//   },
// ];

export const TrainingRecordsContainer = () => {
  useFetchTrainingRecordsIfNeeded();
  const data = useTrainingRecords();
  return (
    <div className="flex flex-col gap-6 w-[400px]">
      {data.map((t, i) => (
        <TrainingRecordItem trainingRecord={t} key={i} />
      ))}
    </div>
  );
};
