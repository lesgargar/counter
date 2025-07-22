import { useState } from "react";
import Button from "../Button";

export default function CountDown({ onClick, onChange, value }) {
  return (
    <div className="p-2 m-2">
      <h3>Start a countdown</h3>
      <input
        type="number"
        className="border solid rounded border-black p-2"
        placeholder="Set a number"
        value={value}
        onChange={(e) => onChange(e.target.value)} //captura el evento
      ></input>

      <Button onClick={onClick} name="Start countdown" />
    </div>
  );
}
