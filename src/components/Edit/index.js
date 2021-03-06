import "./style.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import data from "../../data/data";

function Edit(props) {
  const addressType = ["Dirección de destino", "Dirección remitente", "Ambas"];
  const [addressDataType, setAddressDataType] = useState("");

  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.currentAddress,
  });

  setValue("name", props.currentAddress.name);
  setValue("street", props.currentAddress.street);
  setValue("number", props.currentAddress.number);
  setValue("floor", props.currentAddress.floor);
  setValue("door", props.currentAddress.door);
  setValue("city", props.currentAddress.city);
  setValue("zip", props.currentAddress.zip);
  setValue("state", props.currentAddress.state);
  setValue("type", props.currentAddress.type);
  setValue("default", props.currentAddress.default);

  const handleTypeChange = (e) => {
    if (e.target.value === "Dirección remitente") {
      return setAddressDataType("1400");
    }
    return setAddressDataType("9999");
  };

  const onSubmit = (address, e) => {
    address.id = props.currentAddress.id;
    props.updateAddress(props.currentAddress.id, address);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="addressForm">
      <label className="label">
        Nombre <span className="span">*</span>
      </label>
      <input
        type="text"
        name="name"
        className="input"
        ref={register({
          required: { value: true, message: "Campo requerido" },
        })}
      />
      <div className="requiredField">{errors?.name?.message}</div>

      <label className="label">
        Calle <span className="span">*</span>
      </label>
      <input
        type="text"
        name="street"
        className="input"
        ref={register({
          required: { value: true, message: "Campo requerido" },
        })}
      />
      <div className="requiredField">{errors?.street?.message}</div>

      <label className="label">
        Número <span className="span">*</span>
      </label>
      <input
        type="number"
        name="number"
        className="input"
        ref={register({
          required: { value: true, message: "Campo requerido" },
        })}
      />
      <div className="requiredField">{errors?.number?.message}</div>

      <label className="label">Piso</label>
      <input
        type="text"
        name="floor"
        className="input"
        ref={register({
          required: { value: false },
        })}
      />

      <label className="label">Dpto</label>
      <input
        type="text"
        name="door"
        className="input"
        ref={register({
          required: { value: false },
        })}
      />

      <label className="label">
        Ciudad <span className="span">*</span>
      </label>
      <input
        type="text"
        name="city"
        className="input"
        ref={register({
          required: { value: true, message: "Campo requerido" },
        })}
      />
      <div className="requiredField">{errors?.city?.message}</div>

      <label className="label">
        Provincia <span className="span">*</span>
      </label>
      <select
        name="state"
        className="input"
        ref={register({
          required: { value: true, message: "Campo requerido" },
        })}
      >
        {data.map((state, key) => {
          return <option key={key}>{state.name}</option>;
        })}
      </select>
      <div className="requiredField">{errors?.state?.message}</div>

      <label className="label">
        Tipo <span className="span">*</span>
      </label>
      <select
        name="type"
        className="input"
        onChange={handleTypeChange}
        ref={register({
          required: {
            value: true,
            message: "Campo requerido",
          },
        })}
      >
        {addressType.map((type, key) => {
          return <option key={key}>{type}</option>;
        })}
      </select>
      <div className="requiredField">{errors?.type?.message}</div>

      <label className="label">
        Código Postal <span className="span">*</span>
      </label>
      <input
        type="number"
        name="zip"
        min="1000"
        max={addressDataType}
        className="input"
        ref={register({
          required: {
            value: true,
            message: "Campo requerido",
          },
        })}
      />
      <div className="requiredField">{errors?.zip?.message}</div>

      <label className="label">¿Dirección predeterminada?</label>
      <input
        type="checkbox"
        name="default"
        className="checkbox"
        ref={register({
          required: { value: false },
        })}
      />
      <div className="btnContainer">
        <button className="btn">Actualizar</button>
        <button
          className="btn btnCancel"
          onClick={() => props.setEditMode(false)}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default Edit;
