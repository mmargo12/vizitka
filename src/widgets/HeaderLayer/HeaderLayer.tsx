import { Button } from "../../ui/Button";
import { Card } from "../../ui/Card";
import { useState } from "react";
import styles from "./Header.module.css";
import { info } from "../../lib";

export const HeaderLayer = () => {
  const nameStyles = {
    color: "#fff",
    backgroundColor: "#000",
    width: "300px",
  };

  const factsStyles = {
    width: "300px",
    height: "270px",
    padding: "5px",
    backgroundColor: "#bbf1fa",
  };

  const [isKnowMore, setIsKnowMore] = useState(false);

  const handleClick = () => {
    setIsKnowMore(!isKnowMore);
  };

  const listInfo = info.map((el) => (
    <li key={el.id}>
      {el.info}: {el.value}
    </li>
  ));

  return (
    <div className={styles.root}>
      <div className={styles.part}>
        <Card title="Маргарита ☺" addStyles={nameStyles} />
        <Button onClick={handleClick} />
      </div>

      {isKnowMore && (
        <Card
          title="Факты обо мне"
          content={<div>{listInfo}</div>}
          addStyles={factsStyles}
        />
      )}
    </div>
  );
};
