import React, { useState } from "react";
import {
  Box,
  Grid,
  makeStyles
} from "@material-ui/core";
import {
  ToggleButton,
  ToggleButtonGroup
 } from '@material-ui/lab';
 import { withStyles } from '@material-ui/core/styles';

import { WizardCard } from "../components/WizardCard";
import { WIZARDS } from "../components/wizards";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    padding: "0 0.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Overpass, Helvetica Neue, Open Sans, sans-serif"
  },
  profileGrid: {
    marginTop: "24px",
    marginLeft: "24px",
    marginRight: "24px",
    flexDirection: "row",
    justifyContent: "center"
  },
}));

const StyledToggleButton = withStyles({
  root: {
    color: "rgba(0, 0, 0, 0.8)",
    '&$selected': {
      backgroundColor: "rgba(21, 33, 69, 1.0)",
      color: 'white',
      "&:hover": {
        backgroundColor: "rgba(21, 33, 69, 0.6)",
        color: 'white',
      }
    },
    "&:hover": {
      backgroundColor: "rgba(21, 33, 69, 0.6)",
      color: 'white',
    }
  },
  selected: {},
})(ToggleButton);

export default function Index() {
  const classes = useStyles();

  const [uxFilter, setUxFilter] = useState('all');
  const handleUxFilter = (event, newUxFilter) => {
    if (newUxFilter !== null) {
      setUxFilter(newUxFilter);
    }
  };

  const wizards = WIZARDS.filter((wizard) => uxFilter === "all" || wizard.designerType === uxFilter).map(
    (wizard, index) => <Grid key={index} item><WizardCard {...wizard}></WizardCard></Grid>
  )

  return (
    <main className={classes.container}>
      <Box mt={4}>
        <img src="./logo.png"></img>
      </Box>

      <h1>
        Portfolios
      </h1>

      <ToggleButtonGroup
        value={uxFilter}
        exclusive
        onChange={handleUxFilter}
        aria-label="ux filter"
      >
        <StyledToggleButton value="all" aria-label="filter all">
          All
        </StyledToggleButton>
        <StyledToggleButton value="product" aria-label="filter product">
          Product Designer
        </StyledToggleButton>
        <StyledToggleButton value="interaction" aria-label="filter interaction">
          Interaction Designer
        </StyledToggleButton>
        <StyledToggleButton value="visual" aria-label="filter visual">
          Visual Designer
        </StyledToggleButton>
        <StyledToggleButton value="researcher" aria-label="filter research">
          UX Researcher
        </StyledToggleButton>
        <StyledToggleButton value="writer" aria-label="filter writer">
          UX Writer
        </StyledToggleButton>
        <StyledToggleButton value="engineer" aria-label="filter engineer">
          Frontend Engineer
        </StyledToggleButton>
      </ToggleButtonGroup>

      <Box className={classes.profileGrid}>
        <Grid container spacing={3}>
          {wizards}
        </Grid>
      </Box>
    </main>
  );
}
