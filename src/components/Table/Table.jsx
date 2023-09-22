import { data } from './TableData';
import cx from 'classnames';
import s from './Table.module.scss';

const Table = () => {
  function getStatusClass(status) {
    const allowedStatuses = ["Pending", "Approved"];
    return  cx(s.greyTxt, {[s.redTxt] : !allowedStatuses.includes(status)});
  }

  const rows = data.map((item, index) => {
    const { ReferralEvent, Date, Price, Advocate, Friend, ReferralStatus, Reason } = item;
    const statusClass = getStatusClass(ReferralStatus);

    return (
      <tr key={index}>
        <td>
          <p className={s.boldTxt}>{ReferralEvent}</p>
          <p className={s.greyTxt}>{Date}</p>
          <p className={s.boldTxt}>${Price}</p>
        </td>
        <td>
          <p className={s.boldTxt}>{Advocate}</p>
          <p>Advocate</p>
        </td>
        <td>
          <p className={s.boldTxt}>{Friend}</p>
          <p>Friend</p>
        </td>
        <td>
          <p className={s.boldTxt}>{ReferralStatus}</p>
          <p className={statusClass}>{Reason}</p>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table className={s.table}>
        <thead>
          <tr className={s.boldTxt}>
            <th>Referral event</th>
            <th>Advocate</th>
            <th>Friend</th>
            <th>Referral status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Table;
