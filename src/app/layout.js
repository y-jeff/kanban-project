import "./globals.css";
import I18nProvider from "../components/I18nProvider"; // Proveedor de i18n
import Navbar from "../components/Navbar"; // Barra de navegación
import { Providers } from "./Providers"; // Proveedor de autenticación y estado

export const metadata = {
  title: "Kanban Board",
  description: "A multilingual Kanban board built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <I18nProvider>{children}</I18nProvider>
        </Providers>
      </body>
    </html>
  );
}
