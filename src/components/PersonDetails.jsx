import { FcBusinessman } from "react-icons/fc";
import { IoMdPersonAdd } from "react-icons/io";
import { VscVmActive } from "react-icons/vsc";
import styles from "./PersonDetails.module.css";

const PersonDetails = () => {
  return (
    <>
      <div className={styles.Detailscontainer}>
        <div className={styles.Detailslevel1}>
          <div>
            <FcBusinessman style={{ fontSize: "80px " }} />
          </div>
          <div className={styles.Detailslevel2}>
            <div>Total Customers</div>
            <div>
              <h2>5,423</h2>
            </div>
          </div>
        </div>
        <div className={styles.Detailslevel1}>
          <div>
            <IoMdPersonAdd
              style={{ fontSize: "80px ", color: "greenyellow" }}
            />
          </div>
          <div className={styles.Detailslevel2}>
            <div>Members</div>
            <div>
              <h2>1,893</h2>
            </div>
          </div>
        </div>
        <div className={styles.Detailslevel1}>
          <div>
            <VscVmActive style={{ fontSize: "80px ", color: "blue" }} />
          </div>
          <div className={styles.Detailslevel2}>
            <div>Active Now</div>
            <div>
              <h2>189</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonDetails;
