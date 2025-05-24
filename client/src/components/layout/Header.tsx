import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export function Header() {
  const t = useTranslations("common");
  const pathname = usePathname();

  // Get current locale from pathname
  const currentLocale = pathname.split("/")[1];
  const newLocale = currentLocale === "en" ? "vi" : "en";

  // Create new path by replacing the locale
  const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Restaurant
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/menu" className="hover:text-primary">
              {t("menu")}
            </Link>
            <Link href="/cart" className="hover:text-primary">
              {t("cart")}
            </Link>
            <Link href="/orders" className="hover:text-primary">
              {t("orders")}
            </Link>
            <Link href="/profile" className="hover:text-primary">
              {t("profile")}
            </Link>
            <Link href={newPath} className="hover:text-primary">
              {newLocale.toUpperCase()}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
