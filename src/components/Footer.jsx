import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Akash Badadani ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
