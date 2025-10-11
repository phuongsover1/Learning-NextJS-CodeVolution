"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Login",
    href: "/login",
  },
  { name: "Register", href: "/register" },
  { name: "Forgot Password", href: "/forgot-password" },
];
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
        <h1>Auth Page!!</h1>
        {navLinks.map((link) => {
          const isActive: boolean = pathname === link.href;
          console.log(isActive);
          return (
            <Link
              key={link.name}
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </header>
      {children}
    </>
  );
}
