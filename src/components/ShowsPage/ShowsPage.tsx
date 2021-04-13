import React from "react";
import classes from "./ShowsPage.module.css";
import Search from "../Search/Search";
import { Button, Card, Accordion } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { StarFill, Trash, ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const ShowsPage: React.FC = () => {
  const { handleCollapse, removeItem, removeItems, starItems } = useActions();
  const { shows, genres } = useTypedSelector((state) => state.showsReduser);
  
  const [collapse, setCollapse] = useState({
    toggleCollapse: "",
    type: "",
  });

  useEffect(() => {
    handleCollapse(collapse);
    // eslint-disable-next-line
  }, [collapse]);

  return (
    <div className={classes.showPageContainer}>
      <Search />
      <div>
        {!shows.length ? (
          <p>No items</p>
        ) : (
          <div>
            {genres.map((genre, i) => (
              <Accordion key={genre.name + i}>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      eventKey="0"
                      onClick={() => {
                        setCollapse({
                          toggleCollapse: "show",
                          type: genre.name,
                        });
                      }}
                      variant="link"
                    >
                      {genre.name}
                    </Accordion.Toggle>
                    {genre.collapsed === "show" && (
                      <Button
                        variant="danger"
                        className="ml-4"
                        onClick={() => {
                          removeItems(genre.name);
                        }}
                      >
                        Remove genre
                      </Button>
                    )}
                    <span
                      className={classes.closeCollapse}
                      onClick={() => {
                        setCollapse({
                          toggleCollapse: "hide",
                          type: genre.name,
                        });
                      }}
                    >
                      X
                    </span>
                  </Card.Header>
                  {shows.map((show, index) => (
                    <Accordion.Collapse
                      eventKey="1"
                      className={genre.collapsed}
                      key={show.show.id + index}
                    >
                      <Card.Body style={{ padding: "2px" }}>
                        {(!show.show.genres.length ||
                          show.show.genres.includes(genre.name)) && (
                          <span
                            className={`${classes.showNameblock} ${
                              show.star ? "bg-info" : ""
                            }`}
                          >
                            <Link to={`/shows/${show.show.id}`}>
                              <ArrowRight /> {show.show.name}
                            </Link>
                            <Trash
                              className="float-right text-danger mr-2"
                              size={20}
                              onClick={() => {
                                removeItem(show.show.id);
                              }}
                            />
                            <StarFill
                              className={`
                               ${show.star ? "text-warning" : "text-secondary"} 
                               float-right  mr-2 `}
                              size={20}
                              onClick={() => {
                                starItems(show.show.name);
                              }}
                            />
                            <span className="float-right mr-2">
                              Score: {show.score.toString().slice(0, 8)}
                            </span>
                          </span>
                        )}
                      </Card.Body>
                    </Accordion.Collapse>
                  ))}
                </Card>
              </Accordion>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowsPage;
