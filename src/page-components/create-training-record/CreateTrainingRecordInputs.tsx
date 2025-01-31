import {
  NumberInput,
  Select,
  TextInput,
  TimeInput,
} from "@/common-components/inputs";
import {
  useSetCaloriesBurned,
  useSetDifficulty,
  useSetTiredness,
  useSetTrainingType,
} from "../create-training-record-store";
import {
  useAddTrainingRecordContext,
  useSetDateOfTheTraining,
  useSetNote,
  useSetTimeOfTheTraining,
} from "../create-training-record-store/createTrainingRecordHooks";
import { LocalDateSelect } from "@/common-components/inputs/LocalDateSelect";
import { Button } from "@/common-components/buttons";
import { ReactNode } from "react";
import { trainingTypeStringToString } from "../training-records/trainingTypeEnumToString";
import { useRouter } from "next/router";

const CreateTrainingRecordLabel = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-[14px] leading-4 text-gray-900 font-medium">
      {children}
    </div>
  );
};

export const CreateTrainingRecordInputs = () => {
  const add = useAddTrainingRecordContext();
  const router = useRouter();
  return (
    <div className="w-full max-w-[500px] flex flex-col gap-4 my-auto bg-slate-200 p-8 rounded-lg">
      <AddTrainingTypeComponent />
      <AddCalories />
      <AddDiffculty />
      <AddTiredness />
      <SetNote />
      <PickDate />
      <PickTime />
      <div className="flex gap-2">
        <Button onClick={() => router.push("/")}>Nazad</Button>
        <Button onClick={() => add()}>Dodaj</Button>
      </div>
    </div>
  );
};

const AddTrainingTypeComponent = () => {
  const [type, setType] = useSetTrainingType();

  return (
    <div className="flex flex-col gap-2">
      <CreateTrainingRecordLabel>Izaberite tip:</CreateTrainingRecordLabel>
      <Select value={trainingTypeStringToString(type)} onValueChange={setType}>
        <option value={"Kardio"}>Kardio</option>
        <option value={"Kros fit"}>Kros fit</option>
        <option value={"Full body"}>Full body</option>
        <option value={"Lower body"}>Lower body</option>
        <option value={"Borilacki trening"}>Borilacki trening</option>
        <option value={"Upper body"}>Upper body</option>
      </Select>
    </div>
  );
};

const AddDiffculty = () => {
  const [diff, setDiff] = useSetDifficulty();

  return (
    <div className="flex flex-col gap-2">
      <CreateTrainingRecordLabel>Težina:</CreateTrainingRecordLabel>
      <NumberInput
        placeholder="Unesite težinu"
        minNumber={1}
        maxNumber={10}
        value={diff}
        onValueChange={setDiff}
      />
    </div>
  );
};

const AddCalories = () => {
  const [value, setValue] = useSetCaloriesBurned();

  return (
    <div className="flex flex-col gap-2">
      <CreateTrainingRecordLabel>Potrošene kalorije:</CreateTrainingRecordLabel>
      <NumberInput
        placeholder="Unesite kalorije"
        minNumber={0}
        maxNumber={2000}
        value={value}
        onValueChange={setValue}
      />
    </div>
  );
};

const AddTiredness = () => {
  const [value, setValue] = useSetTiredness();

  return (
    <div className="flex flex-col gap-2">
      <CreateTrainingRecordLabel>Subjektivni umor:</CreateTrainingRecordLabel>
      <NumberInput
        placeholder="Unesite subjektivni umor"
        minNumber={1}
        maxNumber={10}
        value={value}
        onValueChange={setValue}
      />
    </div>
  );
};

const SetNote = () => {
  const [value, setValue] = useSetNote();
  return (
    <div className="flex flex-col gap-2">
      <CreateTrainingRecordLabel>Beleška</CreateTrainingRecordLabel>
      <TextInput value={value} onValueChange={setValue} placeholder="beleška" />
    </div>
  );
};

const PickDate = () => {
  const [value, setValue] = useSetDateOfTheTraining();
  return (
    <div className="flex flex-col gap-2">
      <CreateTrainingRecordLabel>Datum:</CreateTrainingRecordLabel>
      <LocalDateSelect value={value} onValueChange={setValue} />
    </div>
  );
};

const PickTime = () => {
  const [value, setValue] = useSetTimeOfTheTraining();
  return (
    <div className="flex flex-col gap-2">
      <CreateTrainingRecordLabel>Vreme:</CreateTrainingRecordLabel>
      <TimeInput value={value} onValueChange={setValue} placeholder="00:00" />
    </div>
  );
};
