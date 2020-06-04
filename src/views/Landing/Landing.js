import React from "react";
// Material UI
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
// modules
import { useStyles } from "./styles";
import { tiersCard, tiersHeaderNavigation } from "./vars";

export default function Landing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Twolevel
          </Typography>
          <nav>
            {tiersHeaderNavigation.map(tier => (
              <Link
                key={tier.id}
                variant="button"
                color="textPrimary"
                href={tier.url}
                className={classes.link}
                target="_blank"
              >
                {tier.title}
              </Link>
            ))}
          </nav>
        </Toolbar>
      </AppBar>
      {/* Container */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Collections
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} justify="center">
          {tiersCard.map(tier => (
            <Grid item key={tier.id} xs={12} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: "center" }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <ul>
                    {tier.description.map(line => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line.id}
                      >
                        <Link color="inherit" href={line.url} target="_blank">
                          {line.name}
                        </Link>
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="primary"
                    href={tier.buttonUrl}
                    target="_blank"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
