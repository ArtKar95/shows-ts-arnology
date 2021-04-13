import React, { useEffect, useState } from "react";
import { Spinner, InputGroup, FormControl } from "react-bootstrap";
import classes from "./Search.module.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const Search: React.FC = () => {
  const { searchItems } = useActions();
  const { loading } = useTypedSelector((state) => state.showsReduser);

  const [value, setValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => searchItems(value), 500);
    return () => clearTimeout(handler);
    // eslint-disable-next-line
  }, [value]);

  const handleOnKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchItems(value);
    }
  };

  return (
    <div className={classes.container}>
      <div>
        <InputGroup className={classes.input}>
          <FormControl
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-addon1"
            size="lg"
            onChange={(event) => {
              setValue(event.target.value);
            }}
            onKeyDown={handleOnKeyDown}
          />
        </InputGroup>
        <div className={classes.loading}>
          {loading && (
            <span>
              <Spinner animation="border" variant="primary" className="my-4" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
