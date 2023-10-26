import { useState } from "react";

// eslint-disable-next-line react/prop-types
const MyFirstComponent = ({ propOne, propTwo, propThree }) => {

  const [value, setValue] = useState(0);
  const [hola, setHola] = useState('hola');

  console.log(propOne, propTwo, propThree);

  const incrementValue = () => {
    setValue(value + 1);
  };

  const changeHola = () => {
    setHola("Hola Mundo");
  };

  return (
    <div id="1" className="myclassname">
      {hola} este es mi primer componente {value}
      <br/>
      <button onClick={incrementValue}>Incrementa  valor</button>
      <button onClick={changeHola}>Cambiar saludo</button>
    </div>
  );
};

export default MyFirstComponent;