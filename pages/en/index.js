import { NoReset4 } from "components/Images";
import * as styles from "components/Styles";

export default function HomeEn() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <NoReset4 />
        <h1 className={styles.h1Styles}>@Doubletree by Hilton Pointe-Claire</h1>
        <p className={styles.paraStyles}>6700 Trans-Canada Hwy, Pointe-Claire, Quebec H9R 1C2</p>
        <p className={styles.paraStyles}>February 9th to 11th 2024</p>
        <div className={styles.secondaryContainer}>
          <button className={styles.buttonStyle}>Why You Should Come?</button>
          <button className={styles.buttonStyle}>Buy Tickets</button>
          <button className={styles.buttonStyle}>Book Hotel</button>
        </div>
      </div>
    </div>
  )
}
