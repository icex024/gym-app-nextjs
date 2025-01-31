import { AxiosResponse } from "axios";
import { getAxios } from "../axiosWrapper";
import { TrainingRecordDto } from "./TrainingRecordSliceInterface";

export enum TrainingTypeEnum {
  Cardio = "CARDIO",
  UpperBody = "UPPERBODY",
  LowerBody = "LOWERBODY",
  FullBody = "FULLBODY",
  CrossFit = "CROSSFIT",
  MartialArts = "MARTIALARTS",
}

export interface CreateTrainingRecordDto {
  trainingType: TrainingTypeEnum;
  caloriesBurned: number;
  difficulty: number;
  tiredness: number;
  note: string;
  dateAndTimeOfTheTraining: string;
}

function returnHelperString(startDate: string, endDate: string) {
  if (startDate !== "" && endDate !== "") {
    return `?startDate=${startDate}&endDate=${endDate}`;
  }
  return "";
}

export const addTrainingRecord = (dto: CreateTrainingRecordDto) => {
  return getAxios().post(`trainingRecord`, dto);
};

export const getTrainingRecords = (
  startDate: string,
  endDate: string
): Promise<AxiosResponse<TrainingRecordDto[], unknown>> => {
  return getAxios().get(
    `trainingRecord${returnHelperString(startDate, endDate)}`
  );
};
