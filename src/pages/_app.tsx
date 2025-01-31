import { useStore } from "@/backend-layer/_internal/store";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/globals.css";
import "../styles/Calendar.css";
import { useSessionIfNotStarted } from "@/backend-layer/_internal/session/useStartSessionIfNotStarted";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore();
  return (
    <Provider store={store}>
      <HooksOnInit />
      <Component {...pageProps} />
    </Provider>
  );
}

const HooksOnInit = () => {
  useSessionIfNotStarted();
  return <></>;
};

export default MyApp;
