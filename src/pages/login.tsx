import { LoginInputs } from "@/page-components/login/LoginInputs";
import { NextPage } from "next";

const LoginPage: NextPage = () => {
  return (
    <div className="w-full h-screen flex justify-center   bg-white">
      <LoginInputs />
    </div>
  );
};

export default LoginPage;
