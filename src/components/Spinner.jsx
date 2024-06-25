import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

function Spinner() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <ClipLoader
        color="blue"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}
export default Spinner;
