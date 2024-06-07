import Image from "next/image";
import styles from "./page.module.css";

const HomePage = () => (
  <Image src="/imgs/welcome.jpg" alt="Unable to laod image" className={styles.logo} ></Image>
);

export default HomePage;