import PageLayout from "@/Components/PageLayout/PageLayout";
import styles from "@/styles/AboutMe.module.scss";
import Image from "next/image";
import { motion as m } from "framer-motion";
const Aboutme = () => {
  return (
    <PageLayout>
      <main className={styles.aboutMeMain}>
        <h1 className={styles.heading}>About Me</h1>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              <span className={styles.greeting}>Hey Folks,</span> I am Deep
              Thakkar a dedicated full stack web developer <br /> fueled by a
              year-long journey of learning and growth in the digital realm.{" "}
              <br /> <br />
              With a toolbox packed with{" "}
              <span className={styles.highlight}>
                JavaScript, ReactJs, NextJs, Node.js,
              </span>{" "}
              and more. <br /> I relish the challenge of building both the
              frontend allure and the backend robustness of web applications.{" "}
              <br /> But beyond the lines of code, I bring a collaborative
              spirit and a commitment to excellence to every project.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src={"/assets/images/AboutMe.png"}
              width={100}
              height={200}
              alt="About me"
              layout="responsive"
              priority={true}
            />
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Aboutme;

// static site generation for fast navigations
export async function getStaticProps() {
  return {
    props: {},
  };
}
