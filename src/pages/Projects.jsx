import PageLayout from "@/Components/PageLayout/PageLayout";
import ProjectCard from "@/Components/ProjectCard/ProjectCard";
import styles from "@/styles/Projects.module.scss";
import { ProjectList } from "@/utils/Projects";
const Projects = () => {
  return (
    <PageLayout>
      {/* main div */}
      <main className={styles.projectsMain}>
        <h1 className={styles.heading}>Projects</h1>
        <div className={styles.projectContainer}>
          {ProjectList.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                image={project.img}
                deploymentLink={project.deploymentLink}
                githubLink={project.githubLink}
                description={project.description}
              />
            );
          })}
        </div>
      </main>
    </PageLayout>
  );
};

export default Projects;

// static site generation for fast navigations
export async function getStaticProps() {
  return {
    props: {},
  };
}
