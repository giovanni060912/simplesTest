import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    width: "55ch",
  },
}));

export default function Login() {
  const router = useRouter();
  const classes = useStyles();
  return (
    <div
      className="Container"
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
      className="Box"
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "500px",
          marginTop: "20ch",
          marginLeft: "1ch",
          marginRight: "1ch",
          flexDirection: "column",
          borderStyle: "solid",
          alignItems: "center",
        }}
      >
      <div
      style={{
        display: "flex",
        marginTop: "40px",
      }}
    >
      <Image src="/seja-bem-vindo.png" width={300} height={60} />
    </div>
        <form style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <TextField
            required
            className={classes.textField}
            id="E-mail"
            style={{
              marginTop: "60px",
              width: "100%",
              maxWidth: "80%",
            }}
            label="E-mail"
            variant="outlined"
          />

          <TextField
            required
            className={classes.textField}
            id="password"
            style={{
              marginTop: "60px",
              marginBottom: "60px",
              width: "100%",
              maxWidth: "80%",
            }}
            label="Senha"
            variant="outlined"
          />
          <Button
          onClick={() => router.replace('./screens/home')}
            variant="outlined"
            style={{
              display: "flex",
              width: "100%",
              maxWidth: "80%",
              marginBottom: "40px",
              backgroundColor: "#000000",
              color: "#ffffff",
            }}
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
