import React from "react";
import Link from "next/link";
import AuthDisplay from "../AuthDisplay/AuthDisplay";

const NavBar = () => {
  return (
    <div>
      <Link href="/management">
        <p>Return to management</p>
      </Link>
      <h1>NavBar</h1>
      <AuthDisplay />
    </div>
  );
};

export default NavBar;
