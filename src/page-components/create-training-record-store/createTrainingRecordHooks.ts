import { useContext } from "react";
import { CreateTrainingRecordContext } from "./CreateTrainingRecordContext";
import { TrainingTypeEnum } from "@/backend-layer/_internal/trainingRecord/trainingRecordService";
import { useAddTrainingRecord } from "@/backend-layer/trainingRecord";

export const useSetCaloriesBurned = (): [number, (value: number) => void] => {
  const context = useContext(CreateTrainingRecordContext);
  return [
    context.trainingRecord.caloriesBurned,
    (value) => {
      context.updateDiff({ ...context.trainingRecord, caloriesBurned: value });
    },
  ];
};
export const useSetDateOfTheTraining = (): [
  string,
  (value: string) => void
] => {
  const context = useContext(CreateTrainingRecordContext);
  return [
    context.trainingRecord.dateOfTheTraining,
    (value) => {
      context.updateDiff({
        ...context.trainingRecord,
        dateOfTheTraining: value,
      });
    },
  ];
};

export const useSetTimeOfTheTraining = (): [
  string,
  (value: string) => void
] => {
  const context = useContext(CreateTrainingRecordContext);
  return [
    context.trainingRecord.timeOfTheTraining,
    (value) => {
      context.updateDiff({
        ...context.trainingRecord,
        timeOfTheTraining: value,
      });
    },
  ];
};
export const useSetDifficulty = (): [number, (value: number) => void] => {
  const context = useContext(CreateTrainingRecordContext);
  return [
    context.trainingRecord.difficulty,
    (value) => {
      context.updateDiff({ ...context.trainingRecord, difficulty: value });
    },
  ];
};
export const useSetNote = (): [string, (value: string) => void] => {
  const context = useContext(CreateTrainingRecordContext);
  return [
    context.trainingRecord.note,
    (value) => {
      context.updateDiff({ ...context.trainingRecord, note: value });
    },
  ];
};
export const useSetTiredness = (): [number, (value: number) => void] => {
  const context = useContext(CreateTrainingRecordContext);
  return [
    context.trainingRecord.tiredness,
    (value) => {
      context.updateDiff({ ...context.trainingRecord, tiredness: value });
    },
  ];
};
export const useSetTrainingType = (): [
  TrainingTypeEnum,
  (value: string) => void
] => {
  const context = useContext(CreateTrainingRecordContext);
  return [
    context.trainingRecord.trainingType,
    (value) => {
      context.updateDiff({
        ...context.trainingRecord,
        trainingType: convertStringToTrainingTypeEnum(value),
      });
    },
  ];
};

export const useAddTrainingRecordContext = () => {
  const context = useContext(CreateTrainingRecordContext);
  const sendToBackendLayer = useAddTrainingRecord();

  return () => {
    console.log(
      `${context.trainingRecord.dateOfTheTraining}T${context.trainingRecord.timeOfTheTraining}:00Z`
    );
    sendToBackendLayer({
      ...context.trainingRecord,
      dateAndTimeOfTheTraining: `${context.trainingRecord.dateOfTheTraining}T${context.trainingRecord.timeOfTheTraining}:00Z`,
    });
  };
};

const convertStringToTrainingTypeEnum = (value: string) => {
  switch (value) {
    case "Kardio":
      return TrainingTypeEnum.Cardio;
    case "Kros fit":
      return TrainingTypeEnum.CrossFit;
    case "Full body":
      return TrainingTypeEnum.FullBody;
    case "Lower body":
      return TrainingTypeEnum.LowerBody;
    case "Upper body":
      return TrainingTypeEnum.UpperBody;
    case "Borilacki trening":
      return TrainingTypeEnum.MartialArts;
    default:
      return TrainingTypeEnum.MartialArts;
  }
};
