import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import { useToast } from "../ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, children, id }) {
  const Icon = ICONS_BY_VARIANT[variant];
  const { dismissToast } = useToast();

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <VisuallyHidden>{variant}</VisuallyHidden>
      <p className={styles.content}>{children}</p>
      <button
        aria-label="Dismiss message"
        aria-live="off"
        onClick={() => dismissToast(id)}
        className={styles.closeButton}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
