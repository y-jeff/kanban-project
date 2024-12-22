import "./globals.css";
import I18nProvider from "../components/I18nProvider";

export const metadata = {
  title: "Kanban Board",
  description: "A multilingual Kanban board built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
