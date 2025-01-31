import { convertDateToLocalDate } from "@/backend-layer/_internal/date-utils/convertDate";
import { TrainingTypeEnum } from "@/backend-layer/_internal/trainingRecord/trainingRecordService";
import { createContext } from "react";

export interface CreateTrainingRecordContextDto {
  trainingType: TrainingTypeEnum;
  caloriesBurned: number;
  difficulty: number;
  tiredness: number;
  note: string;
  dateOfTheTraining: string;
  timeOfTheTraining: string;
}

export interface CreateTrainingRecordInterface {
  trainingRecord: CreateTrainingRecordContextDto;
  updateDiff: (value: CreateTrainingRecordContextDto) => void;
}

export function createInitialCreateTrainingRecordCreate(): CreateTrainingRecordInterface {
  return {
    trainingRecord: {
      caloriesBurned: 0,
      dateOfTheTraining: convertDateToLocalDate(new Date()),
      timeOfTheTraining: "00:00",
      difficulty: 1,
      note: "",
      tiredness: 1,
      trainingType: TrainingTypeEnum.Cardio,
    },
    updateDiff: () => {
      /* */
    },
  };
}

export const CreateTrainingRecordContext = createContext(
  createInitialCreateTrainingRecordCreate()
);
