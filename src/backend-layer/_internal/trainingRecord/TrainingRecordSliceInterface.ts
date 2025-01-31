export interface TrainingRecordSliceInterface {
  records: TrainingRecordDto[];
  startDate: string;
  endDate: string;
  requestId: string;
  fetchStatus: "PENDING" | "NOTFETCHED" | "NEEDSREFETCH" | "FULFILLED";
}

export interface TrainingRecordDto {
  id: number;
  trainingType: string;
  caloriesBurned: number;
  difficulty: number;
  tiredness: number;
  note: string;
  dateAndTimeOfTheTraining: string;
}
