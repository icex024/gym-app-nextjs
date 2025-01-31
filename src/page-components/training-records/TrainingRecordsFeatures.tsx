import {
  useFetchTrainingRecords,
  useSetCorrectDatesForFilter,
} from "@/backend-layer/trainingRecord";
import { Button } from "@/common-components/buttons";
import { LocalDateSelect } from "@/common-components/inputs";
import { useRouter } from "next/router";
import { useState } from "react";

export const TrainingRecordsFeatures = () => {
  const [showCalendarDashboard, setShowCalendarDashboard] = useState(false);
  const [calendarDate, setCalendarDate] = useSetCorrectDatesForFilter();
  const fetch = useFetchTrainingRecords();
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => router.push("/add-training-record")}>
        Dodaj trening
      </Button>
      <Button onClick={() => setShowCalendarDashboard((prev) => !prev)}>
        Filtracija
      </Button>
      {showCalendarDashboard && (
        <>
          <div>Izaberite vrednosti:</div>
          <div className="flex gap-4 ">
            <div className="max-w-[256px] w-full">
              <LocalDateSelect
                value={calendarDate}
                onValueChange={setCalendarDate}
              />
            </div>
            <Button
              onClick={() => {
                setShowCalendarDashboard(false);
                fetch();
              }}
            >
              Filtriraj
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
