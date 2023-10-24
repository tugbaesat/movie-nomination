import "./globals.css";
import { Libre_Baskerville } from "next/font/google";

const libre_baskerville = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "OSCARS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={libre_baskerville.className}>{children}</body>
    </html>
  );
}
