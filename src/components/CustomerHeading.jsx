import styles from "./CustomerHeading.module.css";

const CustomerHeading = () => {
  return (
    <>
      <div className={styles.customerhead}>
        <h2>All Customers</h2>
        <input type="text" placeholder="Search" />
      </div>
    </>
  );
};
export default CustomerHeading;
