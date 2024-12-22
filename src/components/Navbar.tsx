"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { data: session } = useSession();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <Link href="/">
        <h1 className="text-xl font-bold">{t("title")}</h1>
      </Link>
      <div className="flex space-x-4">
        {session ? (
          <>
            <span>{session.user?.email}</span>
            <button
              onClick={() => signOut()}
              className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100 transition"
            >
              {t("actions.signOut")}
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            {t("actions.signIn")}
          </button>
        )}
        <button
          onClick={toggleLanguage}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          {i18n.language === "en" ? "Español" : "English"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
