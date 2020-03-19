import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({}));

export default function Stori() {
  const theme = useTheme();

  return (
    <Grid item>
      <Card>
        <CardContent>
          <Grid container direction="column"></Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
