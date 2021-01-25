import React, { useState } from "react";
import {
  Box,
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
  makeStyles
} from "@material-ui/core";
import { WIZARDTYPES } from "../components/wizards";

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    transition: "transform 0.15s ease-in-out",
    fontFamily: 'Overpass',
    '&:hover': {
      transform: "scale3d(1.10, 1.10, 1)",
    },
    maxWidth: 250
  },
  cardImage: {
    height: 250,
    width: 250
  },
  wizardName: {
    fontSize: 28
  },
  wizardTitle: {
    fontSize: 14
  }
}));

export function WizardCard({
  name,
  bio,
  imageLink,
  designerType,
  website,
}) {
  const classes = useStyles();

  return (
    <ButtonBase target="_blank" href={website}>
      <Card className={classes.cardRoot}>
        <CardMedia
          className={classes.cardImage}
          image={imageLink}
          title="image"
        />
        <CardContent>
          <div className={classes.wizardName}>{name}</div>
          <div className={classes.wizardTitle}>{WIZARDTYPES[designerType]}</div>
        </CardContent>
      </Card>
    </ButtonBase>
  );
}
