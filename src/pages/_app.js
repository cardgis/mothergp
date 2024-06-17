// src/pages/_app.js
import { SessionProvider } from "next-auth/react";
import { store } from "../app/store";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import StripeProvider from "../StripeProvider";

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <StripeProvider>
      <RecoilRoot>
        <SessionProvider session={session}>
          <Toaster position="bottom-center" />
          <Component {...pageProps} />
        </SessionProvider>
      </RecoilRoot>
    </StripeProvider>
  );
};

export default MyApp;

// //import { Provider } from "react-redux";
// import { SessionProvider } from "next-auth/react";
// import { store } from "../app/store";
// import "../styles/globals.css";
// import { RecoilRoot } from "recoil";
// import { Toaster } from "react-hot-toast";

// const MyApp = ({ Component, session, pageProps }) => {
//   return (

//       <RecoilRoot>
//         <SessionProvider store={store} session={session}>
//           <Toaster position="bottom-center" />
//           <Component {...pageProps} />
//         </SessionProvider>
//       </RecoilRoot>
//   );
// };

// export default MyApp;
