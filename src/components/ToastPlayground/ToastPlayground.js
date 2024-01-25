import React from "react";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import Header from "../Header/Header";
import ToastForm from "../ToastForm/ToastForm";

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <ToastShelf />
      <ToastForm />
    </div>
  );
}

export default ToastPlayground;
