export default function ComplexDashboardLayout({
  children,
  notifications,
  revenue,
  users
}:
  {
    children: React.ReactNode,
    notifications: React.ReactNode,
    revenue: React.ReactNode,
    users: React.ReactNode,
  }) {
  return (
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
  );
}