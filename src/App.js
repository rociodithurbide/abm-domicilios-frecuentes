import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import "./reset.css";
import "./App.scss";
import Addresses from "./components/Addresses";
import Add from "./components/Add";
import Edit from "./components/Edit";

function App() {
  const [addresses, setAddresses] = useLocalStorage("address", []);

  const [editMode, setEditMode] = useState(false);

  const initialEditFormState = {
    id: null,
    name: "",
    street: "",
    number: "",
    floor: "",
    door: "",
    zip: 0,
    city: "",
    state: "",
    type: "",
    default: "",
  };
  const [currentAddress, setCurrentAddress] = useState(initialEditFormState);

  //función que agrega el nuevo domicilio con los datos de Add
  function addAddress(address) {
    setAddresses([...addresses, address]);
  }

  //función que elimina la dirección seleccionada a través del id, enviado desde Addresses
  function deleteAddress(id) {
    setAddresses(addresses.filter((address) => address.id !== id));
  }

  //función que setea los parámetros de la dirección seleccionada para ser editada
  function editAddress(address) {
    setEditMode(true);

    setCurrentAddress({
      id: address.id,
      name: address.name,
      street: address.street,
      number: address.number,
      floor: address.floor,
      door: address.door,
      zip: address.zip,
      city: address.city,
      state: address.state,
      type: address.type,
      default: address.default,
    });
  }

  //función para actualizar la dirección seleccionada
  function updateAddress(id, updatedAddress) {
    setEditMode(false);

    setAddresses(
      addresses.map((address) => {
        return address.id === id ? updatedAddress : address;
      })
    );
  }

  return (
    <div className="App">
      <h1 className="title">ABM domicilios frecuentes</h1>
      <div className="wrapper">
        <div className="formSide">
          {editMode ? (
            <div>
              <h2 className="subtitle">Editar domicilio</h2>
              <Edit
                setEditMode={setEditMode}
                currentAddress={currentAddress}
                updateAddress={updateAddress}
              />
            </div>
          ) : (
            <div>
              <h2 className="subtitle">Agregar Domicilio</h2>
              <Add addAddress={addAddress} />
            </div>
          )}
        </div>
        <div className="addressesSide">
          <h2 className="subtitle">Domicilios</h2>
          <Addresses
            addresses={addresses}
            deleteAddress={deleteAddress}
            editAddress={editAddress}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
