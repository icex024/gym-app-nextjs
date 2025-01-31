import { useLogout } from "@/backend-layer/session";
import { useResetTrainingRecordSlice } from "@/backend-layer/trainingRecord";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  const logOut = useLogout();
  const reset = useResetTrainingRecordSlice();
  return (
    <div className="absolute top-0 w-full h-16 border-b-4 border-b-blue-700 flex justify-between px-5 items-center">
      <div className="flex gap-4">
        <div
          className="select-none cursor-pointer text-[16px] leading-[16px] font-bold"
          onClick={() => router.push("/")}
        >
          Main page
        </div>
        <div
          className="select-none cursor-pointer text-[16px] leading-[16px] font-bold"
          onClick={() => router.push("/add-training-record")}
        >
          Create training record
        </div>
      </div>
      <div
        onClick={() => {
          reset();
          logOut();
        }}
        className="select-none cursor-pointer text-[16px] leading-[16px] font-bold"
      >
        Logout
      </div>
    </div>
  );
};
