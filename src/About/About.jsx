import { icons } from "react-icons";
import styles from "./About.module.scss";
import { IoIosGlasses } from "react-icons/io";

const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.About__title}>
        <img
          src="https://wallpaper.dog/large/20529160.jpg"
          alt="daredevil"
          className={styles.About__img}
        />
        <h1>Daredevil</h1>
        <IoIosGlasses className={styles.About__icon} />
        <h3>Justice is blind</h3>
        <p>
          Matt Murdock is the "Devil of Hell's Kitchen", who took it upon
          himself to protect his city. How did it all begin? At the age of 9,
          Matt saved an elderly man from being hit by a truck carrying chemicals
          - the driver swerved and the truck flipped. However, in the process,
          the chemicals that spilled from the truck splashed onto Matt's eyes
          which rendered him blind. What seemed to be a horrible misfortune
          turned into a blessing though when he realised his hearing had become
          far more sensitive than a regular human's hearing. After years of
          training to fight, Matt Murdock took up the mantle of Daredevil to
          inspire fear in enemies and hope in innocents.
        </p>
      </div>
    </div>
  );
};

export default About;
