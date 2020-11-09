import { FormControlLabel, Switch } from "@material-ui/core";
import React, { useState } from "react";
import "./Filters.css";

const Filters = () => {
  const [onSale, setOnSale] = useState(false);

  return (
    <div className="filter">
      <h3 className="filter__header">Filters</h3>
      <FormControlLabel
        control={
          <Switch
            checked={onSale}
            onChange={() => setOnSale(!onSale)}
            name="onSaleFilter"
          />
        }
        label="On Sale"
      />
    </div>
  );
};

export default Filters;
