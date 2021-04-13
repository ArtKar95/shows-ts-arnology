import React, { useEffect } from "react";
import classes from "./ShowPage.module.css";
import { RouteComponentProps } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const ShowPage: React.FC<RouteComponentProps> = (props) => {
  const { getShow } = useActions();
  const { show } = useTypedSelector((state) => state.showsReduser);

  useEffect(() => {
    const params: any = props.match.params;
    const showId = params.id;
    getShow(showId);
    // eslint-disable-next-line
  }, []);
  return (
    <div className={classes.main}>
      <div className={classes.imgBlock}>
        <img src={show?.image?.medium} alt="no_photo" />
      </div>
      <div className={classes.showBlock}>
        <h2> {show?.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: show?.summary }} />
      </div>
    </div>
  );
};

export default ShowPage;
