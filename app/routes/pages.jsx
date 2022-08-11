import { Link, Outlet } from "@remix-run/react";

export default function () {
  return (
    <div className="container mx-auto">
      <Link to="/">Home</Link>
      <Outlet />
    </div>
  );
}
