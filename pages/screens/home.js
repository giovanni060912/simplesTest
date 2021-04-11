import React from "react";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";
import ClientList from "../../public/components/ClientList";
import Footer from "../../public/components/Footer";
import GitHub from "../../public/components/GitHub";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Tooltip } from "@material-ui/core";

export default function Home() {
  const router = useRouter();

  return (
    <div
    class="Container"
    style={{
      display: "flex",
      width: "100%",
      height: "100%",
      alignItems: "center",
      flexDirection: "column",
    }}
    >
    <div
    style={{
      display: "flex",
      width: "100%",
      height: "150px",
      backgroundColor: "#3f51b5",
    }}
    >
    <GitHub projectUrl="https://github.com/giovanni060912/"/>
        <div
          style={{
            display: "flex",
            width: "60%",
          }}
        >
          <Button
            onClick={() => router.replace("/")}
            style={{
              display: "flex",
              width: "100%",
              height: "60px",
              maxWidth: "30px",
              backgroundColor: "#000000",
              color: "#ffffff",
              marginLeft: "25px",
              marginTop: "25px",
            }}
          >
            Sair
          </Button>
          <Tooltip  onClick={() => router.replace("./form")} style={{marginLeft: "70px",
            marginTop: "20px",
            padding: "35px",
            backgroundColor: "#000000",color: "#ffffff"}} title="Add" aria-label="add">
          <Fab>
            <AddIcon />
          </Fab>
        </Tooltip>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-start",
            fontSize: "30px"
          }}
        >
          <h1>Lista de Clientes</h1>
        </div>
      </div>
      <ClientList />
      <div className="footer"
      style={{display:"flex",width:"100%",height:"60px",justifyContent:"center" }}>
      <Footer />
      </div>
      </div>
  );
}
