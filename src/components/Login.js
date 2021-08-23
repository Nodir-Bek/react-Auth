import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Field } from "formik";
import InfoModal from "./Modal";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const notify = () => {
  toast.warning("Coming soon.....");
};
const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "100%",
    padding: 20,
    display: "block",
    backgroundColor: "blue",
    outline: "none",
    color: "white",
    fontSize: 20,
    borderRadius: 10,
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  let history = useHistory();
  const [token, setToken] = useState("");

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Button variant="primary" onClick={handleOpen}>
            Help for login
          </Button>
          <Formik
            initialValues={{
              userName: "",
              password: "",
            }}
            validateOnBlur
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
              // axios
              //   .post("https://face.ox-sys.com/security/auth_check", {
              //     '_username': values.userName,
              //     '_password': values.password,
              //     '_subdomain': "face",
              //   })
              //   .then((token) => {
              //     console.log(token);
              //     localStorage.setItem("token", token);
              //     history.push("/home");
              //   })
              //   .catch((err) => {
              //     console.log(err);
              //   });

              axios
                .post("https://reqres.in/api/login", {
                  // for example = >
                  // "email": "eve.holt@reqres.in",
                  // "password": "cityslicka"

                  email: values.userName,
                  password: values.password,
                })
                .then((res) => {
                  setToken(res.data.token);
                  console.log(res.data.token);
                  localStorage.setItem("token", res.data.token);
                  toast.success("Login successfull!");
                  history.push("/");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isValid,
              handleSubmit,
              dirty,
            }) => (
              <form>
                <TextField
                  variant="outlined"
                  margin="normal"
                  type="text"
                  required
                  fullWidth
                  value={values.userName}
                  id="userName"
                  label="User Name"
                  name="userName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.userName && touched.userName ? (
                  <div className="text-danger">{errors.userName}</div>
                ) : null}
                <TextField
                  variant="outlined"
                  margin="normal"
                  value={values.password}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.password && touched.password ? (
                  <div className="text-danger">{errors.password}</div>
                ) : null}
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <button
                  disabled={!isValid && !dirty}
                  type="submit"
                  className="btn btn-outline-primary w-100"
                  onClick={handleSubmit}
                >
                  Sign In
                </button>
                <Grid container>
                  <Grid item xs>
                    <span
                      className="btn btn-link"
                      onClick={notify}
                      variant="body2"
                    >
                      Forgot password?
                    </span>
                  </Grid>
                  <Grid item>
                    <Link to="/sign-up" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </div>
      </Grid>
      <ToastContainer />
      <InfoModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </Grid>
  );
}
