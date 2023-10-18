import { aboutMe, capabilities, greetings, studies } from "../../lib";
import { Card } from "../../ui/Card";
import styles from "./Info.module.css";

export const InfoLayer = () => {
  const aboutMeStyles = {
    width: "500px",
    height: "500px",
    padding: "5px",
    lineHeight: "22px",
    backgroundColor: "#f0bbfa",
  };

  const capabilitiesStyles = {
    width: "270px",
    height: "200px",
    padding: "15px 10px",
    backgroundColor: "#bbfad7",
  };

  const listCapabilities = capabilities.map((el) => (
    <li key={el.id}>{el.value}</li>
  ));

  return (
    <div className={styles.root}>
      <Card
        content={
          <>
            <h2>{greetings}</h2>
            <p>{aboutMe}</p>
            <p>{studies}</p>
          </>
        }
        addStyles={aboutMeStyles}
      />
      <Card
        content={
          <>
            <h3>Технологии</h3>
            <ul className={styles.ul}>{listCapabilities}</ul>
          </>
        }
        addStyles={capabilitiesStyles}
      />
    </div>
  );
};
