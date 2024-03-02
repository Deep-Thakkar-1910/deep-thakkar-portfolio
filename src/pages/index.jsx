import styles from "@/styles/Home.module.scss";
import { Typewriter } from "react-simple-typewriter";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { useRouter } from "next/router";
import PageLayout from "@/Components/PageLayout/PageLayout";
function Home() {
  const router = useRouter();
  return (
    <PageLayout>
      <main className={styles.homeMain}>
        {/* hero Section */}
        {/* heroText Div */}
        <div>
          <h1 className={styles.heading}>Hey Folks!</h1>
          <p className={styles.subheading}>
            I am
            <span className={styles.typed}>
              <Typewriter
                loop={true}
                typeSpeed={100}
                cursor
                deleteSpeed={50}
                words={["Deep Thakkar", "a Developer"]}
              />
            </span>
          </p>
          <p className={styles.tagline}>
            A Web Developer Enthusiast <br /> Bringing Designs to Life Through
            Responsive and Interactive Frontend Solutions.
          </p>
        </div>
        {/* hero socials */}
        <div className={styles.socialsDiv}>
          {/* github */}
          <div
            className={styles.socialLinks}
            onClick={() => router.push("https://github.com/Deep-Thakkar-1910")}
          >
            <FiGithub className={styles.github} size={"1.2rem"} />
          </div>
          {/* twitter */}
          <div
            className={styles.socialLinks}
            onClick={() => router.push("https://twitter.com/Deep_thakkar_02")}
          >
            <BsTwitterX className={styles.twitter} size={"1.2rem"} />
          </div>
          {/* linkedin*/}
          <div
            className={styles.socialLinks}
            onClick={() =>
              router.push("https://www.linkedin.com/in/deep-thakkar-95635724b")
            }
          >
            <FaLinkedinIn className={styles.linkedin} size={"1.2rem"} />
          </div>
          {/* instagram*/}
          <div
            className={styles.socialLinks}
            onClick={() =>
              router.push("https://www.instagram.com/thakkar_deep_2002/")
            }
          >
            <FaInstagram className={styles.instagram} size={"1.2rem"} />
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
export default Home;

// static site generation for fast navigations
export async function getStaticProps() {
  return {
    props: {},
  };
}
