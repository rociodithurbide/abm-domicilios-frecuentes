import "./style.scss";

function Addresses(props) {
  console.log(props.addresses);
  return (
    <>
      {props.addresses.length > 0 ? (
        props.addresses.map((address) => {
          return (
            <table key={address.id} className="tableAddresses">
              <thead className="thead">
                <tr>
                  {/* <th>ID</th> */}
                  <th>Nombre</th>
                  <th>Calle</th>
                  <th>Número</th>
                  <th>Piso</th>
                  <th>Dpto</th>
                  <th>Código Postal</th>
                  <th>Ciudad</th>
                  <th>Provincia</th>
                  <th>Tipo</th>
                  {/* <th>Predeterminada</th> */}
                </tr>
              </thead>
              <tbody className="theadBody">
                <tr>
                  {/* <td>{address.id}</td> */}
                  <td>{address.name}</td>
                  <td>{address.street}</td>
                  <td>{address.number}</td>
                  <td className="minHeight">{address.floor}</td>
                  <td className="minHeight">{address.door}</td>
                  <td>{address.zip}</td>
                  <td>{address.city}</td>
                  <td>{address.state}</td>
                  <td>{address.type}</td>
                  {/* <td>{address.default}</td> */}
                  <td className="btnContainer">
                    <button
                      className="btn"
                      onClick={() => props.editAddress(address)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btnDelete"
                      onClick={() => props.deleteAddress(address.id)}
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })
      ) : (
        <div>
          <p>No hay direcciones existentes</p>
        </div>
      )}
    </>
  );
}

export default Addresses;
