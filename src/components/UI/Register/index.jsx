import React, { lazy } from "react";
import { systemSettings } from "../../../settings";
const RegisterComponent =
  systemSettings.register.status && lazy(() => import("./RegisterT1"));

const Register = ({ modal }) => {
  return (
    RegisterComponent && (
      <div id="contactus">
        <RegisterComponent modal={modal} />
      </div>
    )
  );
};

export default Register;
