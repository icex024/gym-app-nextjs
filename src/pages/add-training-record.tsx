import { withCreateTrainingRecordProvider } from "@/page-components/create-training-record-store/CreateTrainingRecordProvider";
import { CreateTrainingRecordInputs } from "@/page-components/create-training-record/CreateTrainingRecordInputs";
import { Navbar } from "@/page-components/navbar";
import { NextPage } from "next";

const AddTrainingRecord: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen   flex justify-center   px-16 py-12 bg-white">
        <CreateTrainingRecordInputs />
      </div>
    </>
  );
};

export default withCreateTrainingRecordProvider(AddTrainingRecord);
