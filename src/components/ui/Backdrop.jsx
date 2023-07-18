import classes from "./Backdrop.module.css";

const Backdrop = (props: any) => {
  if (!props.show) {
    return <></>;
  }
  return <div className={classes.Backdrop} onClick={props.onClick}></div>;
};

export default Backdrop;
