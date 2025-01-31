import { TrainingTypeEnum } from "@/backend-layer/_internal/trainingRecord/trainingRecordService";

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

export const trainingTypeStringDataFromBackToString = (type: string) => {
  switch (type) {
    case "CARDIO":
      return "Kardio";
    case "UPPERBOYD":
      return "Upper body";
    case "LOWERBODY":
      return "Lower body";
    case "FULLBODY":
      return "Full body";
    case "CROSSFIT":
      return "Kros fit ";
    case "MARTIALARTS":
      return "Borilacki trening";
    default:
      return "";
  }
};

export const convertStringToTrainingTypeEnum = (value: string) => {
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
