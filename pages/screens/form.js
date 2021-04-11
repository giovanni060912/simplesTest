import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button, TextField } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function SimpleTabs() {
    const router = useRouter();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Dados Pessoais" {...a11yProps(0)} />
          <Tab label="Imformações Adicionais" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <TextField
            style={{ width: "50%", marginTop: "50px" }}
            id="nome"
            label="Primeiro Nome"
            variant="outlined"
            color="secondary"
          />
          <TextField
            style={{ width: "50%", marginTop: "50px" }}
            id="sobrenome"
            label="Ultimo nome"
            variant="outlined"
            color="secondary"
          />
          <TextField
            style={{ width: "50%", marginTop: "50px" }}
            id="cidade"
            label="Cidade"
            variant="outlined"
            color="secondary"
          />
          <TextField
            style={{ width: "50%", marginTop: "50px" }}
            id="bairro"
            label="Bairro"
            variant="outlined"
            color="secondary"
          />

          <TextField
          style={{ width: "50%", marginTop: "50px" }}
          id="rua"
          label="Rua"
          variant="outlined"
          color="secondary"
        />
        <TextField
        style={{ width: "50%", marginTop: "50px" }}
        id="nomePai"
        label="Nome do Pai"
        variant="outlined"
        color="secondary"
      />
      <TextField
      style={{ width: "50%", marginTop: "50px" }}
      id="nomeMae"
      label="Nome da Mãe"
      variant="outlined"
      color="secondary"
    />
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
    <TextField
      style={{ width: "50%", marginTop: "50px" }}
      id="escolaridade"
      label="Escolaridade"
      variant="outlined"
      color="secondary"
    />
      <TextField
        style={{ width: "50%", marginTop: "50px" }}
        id="profissao"
        label="Profissão"
        variant="outlined"
        color="secondary"
      />
      <TextField
        style={{ width: "50%", marginTop: "50px" }}
        id="curso"
        label="Cursos Superior"
        variant="outlined"
        color="secondary"
      />
      <TextField
        style={{ width: "50%", marginTop: "50px" }}
        id="experiencia"
        label="Expêriencia Profissional"
        variant="outlined"
        color="secondary"
      />
      <div style={{display: "flex", width: "100%",alignItems: "center",justifyContent: "center",marginTop: "60px"}}>
      <Button
      onClick={() => router.replace("./home")}
      style={{
          display: "flex",
          width: "100%",
          height: "60px",
          maxWidth: "100px",
          backgroundColor: "#000000",
          color: "#ffffff",
          marginLeft: "25px",
        }}
        >
        Voltar
        </Button>
        <Button
        onClick={() => router.replace("/")}
        style={{
            display: "flex",
            width: "100%",
            height: "60px",
            maxWidth: "100px",
            backgroundColor: "#000000",
            color: "#ffffff",
            marginLeft: "25px",
        }}
        >
        Sair
        </Button>
        </div>
        </form>
      </TabPanel>
    </div>
  );
}
