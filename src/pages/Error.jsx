import React from "react";
import classes from "./Error.module.css";

export default function ErrorPage() {
  return (
    <>
      <main className={classes.error}>
        <h1>Hiba történt</h1>
        <p>Nem sikerült betölteni az oldalt</p>
      </main>
    </>
  );
}
