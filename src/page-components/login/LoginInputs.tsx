import { useLogin } from "@/backend-layer/_internal/session/useLogin";
import { Button } from "@/common-components/buttons";
import { TextInput } from "@/common-components/inputs";
import { useRouter } from "next/router";
import { useState } from "react";

export const LoginInputs = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const router = useRouter();
  return (
    <div className="w-[500px] max-h-[500px] px-16 py-12 flex flex-col  gap-8 rounded bg-slate-200 my-auto">
      <TextInput
        value={username}
        onValueChange={setUsername}
        placeholder="Unesi email adresu"
      />
      <TextInput
        value={password}
        onValueChange={setPassword}
        placeholder="Unesi lozinku"
        type="password"
      />
      <div className="flex gap-2">
        <Button onClick={() => router.push("/signup")}>Nov nalog</Button>
        <Button onClick={() => login(username, password)}>Uloguj se</Button>
      </div>
    </div>
  );
};
