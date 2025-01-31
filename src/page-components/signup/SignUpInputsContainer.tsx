import { TextInput } from "@/common-components/inputs";
import { ReactNode } from "react";
import {
  useMakeNewUser,
  useSetEmail,
  useSetFirstName,
  useSetLastName,
  useSetPassword,
} from "../sign-up-store";
import { Button } from "@/common-components/buttons";
import { useRouter } from "next/router";

const SignUpLabel = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-[14px] leading-4 text-gray-900 font-medium">
      {children}
    </div>
  );
};

export const SignUpInputsContainer = () => {
  const create = useMakeNewUser();
  const router = useRouter();
  return (
    <div className="w-full max-w-[500px] flex flex-col gap-4 my-auto bg-slate-200 p-8 rounded-lg">
      <EmailComponent />
      <PasswordComponent />
      <FirstNameComponent />
      <LastNameComponent />
      <div className="flex gap-2">
        <Button
          onClick={() => {
            router.push("/login");
          }}
        >
          Nazad
        </Button>
        <Button
          onClick={() => {
            create();
          }}
        >
          Dodaj
        </Button>
      </div>
    </div>
  );
};

const EmailComponent = () => {
  const [value, setValue] = useSetEmail();
  return (
    <div className="flex flex-col gap-2">
      <SignUpLabel>Korisnička email adresa:</SignUpLabel>
      <TextInput placeholder="email" value={value} onValueChange={setValue} />
    </div>
  );
};

const PasswordComponent = () => {
  const [value, setValue] = useSetPassword();
  return (
    <div className="flex flex-col gap-2">
      <SignUpLabel>Lozinka:</SignUpLabel>
      <TextInput
        type="password"
        placeholder="lozinka"
        value={value}
        onValueChange={setValue}
      />
    </div>
  );
};

const FirstNameComponent = () => {
  const [value, setValue] = useSetFirstName();
  return (
    <div className="flex flex-col gap-2">
      <SignUpLabel>Ime:</SignUpLabel>
      <TextInput placeholder="Ime" value={value} onValueChange={setValue} />
    </div>
  );
};

const LastNameComponent = () => {
  const [value, setValue] = useSetLastName();
  return (
    <div className="flex flex-col gap-2">
      <SignUpLabel>Prezime:</SignUpLabel>
      <TextInput placeholder="prezime" value={value} onValueChange={setValue} />
    </div>
  );
};
