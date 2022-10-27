import styles from "./History.module.scss";
import tvProfile from "../Images/matt-profile.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const History = () => {
  return (
    <div>
      <section className={styles.History}>
        <h2>Daredevil History - Comics and TV</h2>
        <h3>Daredevil on Television</h3>
        <div className={styles.History__tvInfo}>
          <img src={tvProfile} alt="" className={styles.History__img1} />
          <div className={styles.History__tvInfo_profile}>
            <h3>Profile:</h3>
            <p>Height: 5'8 / 1.78m / 178cm</p>
            <p>Eyes: Hazel-Brown</p>
            <p>Hair: Brown</p>
            <p>Place of Origin: Hell's Kitchen, New York, NY</p>
          </div>
        </div>
      </section>
      <section className={styles.History__comicsVsTV}>
        <p>
          Between the comics and the TV show, the comics have a large, expansive
          story with even multiple different storylines. For obvious reasons,
          the TV show cannot cover all of those but it does manage to cover the
          most important aspects to fully encapsulate the character of Matt
          Murdock. Matt is a man who feels strongly History justice, since he
          was subjected to injustice from his childhood where his father,
          "Battlin' Jack" Murdock, a boxer, was killed in an alleyway after
          refusing to comply with his boss' instructions. Matt fights for the
          underprivileged in court and when the law fails, he takes matters into
          his own hands as Daredevil.
        </p>
        <h3>
          "As Daredevil, I get to save the world. As a lawyer... maybe I can fix
          it. I need them both. That's what I realized. The warrior and the
          lawyer. It doesn't work if I only have one." - Matt Murdock
        </h3>
      </section>
      <section className={styles.History__comics}>
        <h3>Daredevil in Comics</h3>
        <div className={styles.History__comics_profile}>
          <LazyLoadImage
            src="https://img9.uhdpixel.com/wp/a/47/daredevil-marvel-comics-a4724-820x461.jpg?embed"
            alt="Daredevil Marvel Comics"
            className={styles.History__comics_img2}
          />
          <div className={styles.History__comics_profileText}>
            <h3>Profile:</h3>
            <p>Height: 6'0 / 1.83m / 183cm</p>
            <p>Eyes: Blue</p>
            <p>Hair: Red</p>
            <p>Place of Origin: Hell's Kitchen, New York, NY</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
