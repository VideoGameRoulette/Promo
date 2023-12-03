import Link from 'next/link';
import { NoReset4 } from "components/Images";
import { Styles } from 'components/Styles';

export default function HomeFr() {
  return (
    <div className={Styles.main}>
      <div className={Styles.center}>
        <NoReset4 className={Styles.logo} />
        <h1 className={Styles.header}>Doubletree par Hilton Pointe-Claire</h1>
        <p className={Styles.para}>6700 Aut. Trans-Canada, Pointe-Claire, Québec H9R 1C2</p>
        <p className={Styles.paraLast}>9 au 11 février 2024</p>
        <div className={Styles.btns}>
          <Link href="https://noreset.tv/events/guides/activities" legacyBehavior>
            <a className={Styles.btn1}>Pourquoi vous déplacer?</a>
          </Link>
          <Link href="https://noreset.fundkyapp.com/en/noreset4/ticket-purchase/choose" legacyBehavior>
            <a className={Styles.btn2}>Achetez votre billet</a>
          </Link>
          <Link href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=YULANDT&groupCode=CDTCN2&arrivaldate=2024-02-08&departuredate=2024-02-12&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT" legacyBehavior>
            <a className={Styles.btn3}>Réservation d'hôtel</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
