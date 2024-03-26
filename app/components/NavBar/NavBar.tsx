import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <div>
      <h1>NavBar</h1>
      <Link href="/management">
        <p>Return to management</p>
      </Link>
    </div>
  );
};

export default NavBar;
