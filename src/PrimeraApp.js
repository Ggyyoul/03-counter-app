import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, subTitle }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>{subTitle}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subTitle: "Mi primer componente",
};
export default PrimeraApp;
