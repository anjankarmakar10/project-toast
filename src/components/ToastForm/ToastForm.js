import React, { useState } from "react";
import Button from "../Button";
import { useToast } from "../ToastProvider";
import styles from "./ToastForm.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastForm() {
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = useState("");
  const { createToast } = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    const toast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };
    createToast(toast);
    setVariant(VARIANT_OPTIONS[0]);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
      <div className={styles.row}>
        <label
          htmlFor="message"
          className={styles.label}
          style={{ alignSelf: "baseline" }}
        >
          Message
        </label>
        <div className={styles.inputWrapper}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            id="message"
            className={styles.messageInput}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Variant</div>
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          {VARIANT_OPTIONS.map((option) => (
            <label key={option} htmlFor={`variant-${option}`}>
              <input
                id={`variant-${option}`}
                type="radio"
                name="variant"
                value={option}
                checked={option === variant}
                onChange={(e) => setVariant(e.target.value)}
                required
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label} />
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
          <Button>Pop Toast!</Button>
        </div>
      </div>
    </form>
  );
}

export default ToastForm;
