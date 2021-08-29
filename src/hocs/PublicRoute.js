import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoute = ({ ...props }) => {
  const authed = useSelector((state) => state.profile.authorized);

  return !authed ? <Route {...props} /> : <Redirect to="/home" />;
};