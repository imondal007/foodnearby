import styles from "./styles.module.css";

const Item = () => (
  <div className="xl:w-1/3 md:w-1/3 w-full p-4">
    <div className={styles.animate}>
      <div className="h-52 w-full rounded-md bg-gray-200" />
      <div className="mt-2 h-2 w-full rounded-md bg-gray-200" />
      <div className="mt-2 h-4 w-full rounded-sm bg-gray-200" />
      <div className="mt-2 h-2 w-full rounded-md bg-gray-200" />
    </div>
  </div>
);

const ShimmerRC = () => {
  return (
    <>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </>
  );
};

export default ShimmerRC;
