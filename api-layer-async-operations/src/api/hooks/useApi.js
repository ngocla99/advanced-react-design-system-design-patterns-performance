import React from "react";
import { useApiStatus } from "./useApiStatus";
import { ERROR, PENDING, SUCCESS } from "../../constants/api-status";

export const useApi = (fn, config = {}) => {
  const { initialData } = config;
  const [data, setData] = React.useState();
  const [error, setError] = React.useState();
  const { status, setStatus, ...normalizeStatuses } = useApiStatus();

  const exec = async (...args) => {
    try {
      setStatus(PENDING);
      const data = await fn(...args);
      setData(data);
      setStatus(SUCCESS);

      return {
        data,
        error: null,
      };
    } catch (error) {
      setError(error);
      setStatus(ERROR);
      return {
        error,
        data: null,
      };
    }
  };

  return {
    data,
    setData,
    status,
    setStatus,
    exec,
    ...normalizeStatuses,
  };
};
