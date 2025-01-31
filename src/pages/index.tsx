import { Navbar } from "@/page-components/navbar";
import { TrainingRecordsContainer } from "@/page-components/training-records/TrainingRecordsContainer";
import { TrainingRecordsFeatures } from "@/page-components/training-records/TrainingRecordsFeatures";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen  px-16 pt-20 pb-12 bg-white">
        <div>
          <TrainingRecordsFeatures />
        </div>
        <div className="mt-8">
          <TrainingRecordsContainer />
        </div>
      </div>
    </>
  );
};

export default Home;
