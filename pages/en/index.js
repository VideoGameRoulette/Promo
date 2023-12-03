import Link from 'next/link';
import { NoReset4 } from "components/Images";
import { Styles } from 'components/Styles';

export default function HomeEn() {
  return (
    <div className={Styles.main}>
      <div className={Styles.center}>
        <NoReset4 className={Styles.logo} />
        <h1 className={Styles.header}>Doubletree by Hilton Pointe-Claire</h1>
        <p className={Styles.para}>6700 Trans-Canada Hwy, Pointe-Claire, Quebec H9R 1C2</p>
        <p className={Styles.paraLast}>February 9th to 11th, 2024</p>
        <div className={Styles.btns}>
          <Link href="https://noreset.tv/events/guides/activities" legacyBehavior>
            <a className={Styles.btn1}>Why You Should Come?</a>
          </Link>
          <Link href="https://noreset.fundkyapp.com/en/noreset4/ticket-purchase/choose" legacyBehavior>
            <a className={Styles.btn2}>Buy Tickets</a>
          </Link>
          <Link href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=YULANDT&groupCode=CDTCN2&arrivaldate=2024-02-08&departuredate=2024-02-12&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT" legacyBehavior>
            <a className={Styles.btn3}>Book Hotel</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
