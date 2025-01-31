import { withSignUpProvider } from "@/page-components/sign-up-store/SignUpProvider";
import { SignUpInputsContainer } from "@/page-components/signup/SignUpInputsContainer";
import { NextPage } from "next";

const SignUp: NextPage = () => {
  return (
    <div className="w-full h-screen flex justify-center   bg-white">
      <SignUpInputsContainer />
    </div>
  );
};

export default withSignUpProvider(SignUp);
