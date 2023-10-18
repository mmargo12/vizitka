import { projects } from "../../lib";
import { Card } from "../../ui/Card";
import styles from "./Projects.module.css";

export const Projects = () => {
  const listProject = projects.map((el) => (
    <div className={styles.project} key={el.id}>
      <Card
        content={
          <>
            <h1>{el.number}</h1>
            <h3>{el.title}</h3>
            <p>{el.technologies}</p>
            <img src={el.image} alt="Изображение главной страницы проекта"></img>
            <a href={el.link}>GitHub</a>
          </>
        }
      />
    </div>
  ));

  return <div className={styles.projects}>{listProject}</div>;
};
