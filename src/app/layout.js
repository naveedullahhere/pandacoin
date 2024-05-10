import Head from "next/head";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import '../app/globals.css'
import Script from "next/script";

export const metadata = {
  title: "Pandacoin",
  description: "The latest sensation in the world of meme coins on the SOLANA blockchain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"  />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
