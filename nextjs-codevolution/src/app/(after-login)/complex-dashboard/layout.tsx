import React from "react"

export default function ComplexDashboardLayout({
  children,
  notifications,
  revenue,
  users,
  login
}:
  {
    children: React.ReactNode,
    notifications: React.ReactNode,
    revenue: React.ReactNode,
    users: React.ReactNode,
    login: React.ReactNode
  }) {
  const isLogin = Math.floor(Math.random() * 2) == 1
  return isLogin ? (
    <section>
      <div>
        {children}
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {users}
          {revenue}
        </div>
        <div style={{ display: "flex", flex: 1 }}>
          {notifications}
        </div>
      </div>

    </section>
  ): (login)
}