"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import "./styles.css"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navLinks = [
    {
      href: "/login",
      name: "Login"
    },
    {
      href: "/register",
      name: "Register"
    },
    {
      href: "/forgot-password",
      name: "Forgot Password"
    }
  ]

  const pathname = usePathname()
  return (
    <>
      <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
        <h1>Auth Page!!</h1>
        {navLinks.map(link => {
          const isActive = pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/")
          return <Link
            key={link.name}
            className={isActive
              ? "font-bold mr-4"
              : "text-blue-500 mr-4"}
            href={link.href}>{link.name}
          </Link>
        })}
      </header>
      {children}
    </>
  )
}
