import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useStyles } from "./styles";

const tiers = [
  {
    title: "REST API",
    description: [
      { id: 1, name: "Random data", url: "https://api.twolevel.net/faker" },
      { id: 2, name: "Todos", url: "https://api.twolevel.net/todos" },
      { id: 3, name: "Quotes", url: "https://api.twolevel.net/quotes" },
      { id: 4, name: "Albums", url: "https://api.twolevel.net/albums" }
    ],
    buttonText: "More",
    buttonVariant: "outlined",
    buttonUrl: "https://api.twolevel.net/"
  }
];

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
            <Link
              variant="button"
              color="textPrimary"
              href="https://twitter.com/dannyeka"
              className={classes.link}
              target="_blank"
            >
              Twitter
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="https://discord.gg/uGGfKJ"
              className={classes.link}
              target="_blank"
            >
              Discord
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="https://www.ekaprasetia.com/"
              className={classes.link}
              target="_blank"
            >
              Blog
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          My Collections
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} justify="center">
          {tiers.map(tier => (
            <Grid item key={tier.id} xs={12} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
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
