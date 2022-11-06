import { icons } from "react-icons";
import styles from "./About.module.scss";
import { IoIosGlasses } from "react-icons/io";

const About = () => {
  return (
    <div className={styles.About}>
      <section className={styles.About__title}>
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
          far more sensitive than the regular person. Several years later, he
          went to college to become a lawyer. Now, after years of training to
          fight, Matt Murdock took up the mantle of Daredevil to inspire fear in
          enemies and hope in innocents - he is attorney by day and Daredevil by
          night.
        </p>
      </section>
    </div>
  );
};

export default About;
