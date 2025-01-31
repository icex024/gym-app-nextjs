import { ReactNode, useReducer } from "react";
import {
  createInitialCreateTrainingRecordCreate,
  CreateTrainingRecordContext,
  CreateTrainingRecordContextDto,
  CreateTrainingRecordInterface,
} from "./CreateTrainingRecordContext";

const setTrainingRecordChanges = (
  state: CreateTrainingRecordContextDto,
  action: CreateTrainingRecordContextDto
) => {
  state = { ...action };
  return state;
};

export const CreateTrainingRecordProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatchState] = useReducer(
    setTrainingRecordChanges,
    createInitialCreateTrainingRecordCreate().trainingRecord
  );

  const value: CreateTrainingRecordInterface = {
    trainingRecord: state,
    updateDiff: (value) => dispatchState({ ...state, ...value }),
  };

  return (
    <CreateTrainingRecordContext.Provider value={value}>
      {children}
    </CreateTrainingRecordContext.Provider>
  );
};

export function withCreateTrainingRecordProvider<P extends object>(
  Component: React.ComponentType<P>
) {
  const WithCreateTrainingRecordProvider = (props: P) => (
    <CreateTrainingRecordProvider>
      <Component {...props} />
    </CreateTrainingRecordProvider>
  );
  return WithCreateTrainingRecordProvider;
}
