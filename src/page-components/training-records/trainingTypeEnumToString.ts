import { TrainingTypeEnum } from "@/backend-layer/_internal/trainingRecord/trainingRecordService";

export const trainingTypeEnumToString = (type: TrainingTypeEnum) => {
  switch (type) {
    case TrainingTypeEnum.Cardio:
      return "Kardio";
    case TrainingTypeEnum.CrossFit:
      return "Kros fit";
    case TrainingTypeEnum.FullBody:
      return "Full body";
    case TrainingTypeEnum.LowerBody:
      return "Lower body";
    case TrainingTypeEnum.UpperBody:
      return "Upper body";
    case TrainingTypeEnum.MartialArts:
      return "Borilacki trening";
    default:
      return "";
  }
};

export const trainingTypeStringToString = (type: string) => {
  switch (type) {
    case TrainingTypeEnum.Cardio:
      return "Kardio";
    case TrainingTypeEnum.CrossFit:
      return "Kros fit";
    case TrainingTypeEnum.FullBody:
      return "Full body";
    case TrainingTypeEnum.LowerBody:
      return "Lower body";
    case TrainingTypeEnum.UpperBody:
      return "Upper body";
    case TrainingTypeEnum.MartialArts:
      return "Borilacki trening";
    default:
      return "";
  }
};

export const trainingTypeStringDataFromBackToString = (type: number) => {
  switch (type) {
    case 0:
      return "Kardio";
    case 1:
      return "Upper body";
    case 2:
      return "Lower body";
    case 3:
      return "Full body";
    case 4:
      return "Kros fit ";
    case 5:
      return "Borilacki trening";
    default:
      return "";
  }
};
