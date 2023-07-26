import "@styles/globals.css";

import Nav from "@components/Nav";

export const metadata = {
  title: "Club50",
  description: "Providing meaning engagement for elderly, by elderly",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="icon" href="/assets/icons/logo.ico" sizes="any" />
    </head>
    <body>
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app">
        <Nav />
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
