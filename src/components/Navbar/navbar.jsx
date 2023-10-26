import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";


const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("onSearch cambio");
  }, [onSearch]);

  useEffect(() => {
    console.log("componente Listo");
  }, [onSearch]);

  useEffect(() => {
    console.log("Search cambio");
  }, [onSearch]);

  const handleInputChange = (evt) => {
    setSearch(evt.target.value);
  };

  useImperativeHandle(ref, () => ({
    search,
  }));

  const handleInputKeyDown = (evt) => {
    if (evt.key === "Enter") {
      onSearch(search);
    }
  };
//Ejemplo de estilos # 1  OJO no es una buena practica
  return (
    <div
      ref={ref}
      style={{
        marginBotton: 14,
        width: "100%",
        display: "flex",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
        }}
      >
        <p
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Mi boletera
        </p>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <input
          placeholder="Busca tu evento Favotiro"
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={search}
          style={{
            fontSize: 16,
            padding: "6px 12px",
            borderRadius: 4,
            border: "none",
            width: 200,
          }}
        />
        <Link to ="/profile/my-info" className={styles.linkToProfile}> My Perfil </Link>
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
