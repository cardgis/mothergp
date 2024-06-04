import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "../app/store";
import "../styles/globals.css";

const MyApp = ({ Component, session, pageProps }) => {
  return (
    <SessionProvider store={store} session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
