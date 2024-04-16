import { useMemo, useState } from "react";
import { IDLE, defaultApiStatuses } from "../../constants/api-status";

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1); // "ERROR" => "Error" => isError

const prepareStatuses = (currentStatus) => {
  const statuses = {};

  for (const status of defaultApiStatuses) {
    const normalizedStatus = capitalize(status.toLowerCase());
    const normalizedStatusKey = `is${normalizedStatus}`;
    statuses[normalizedStatusKey] = status === currentStatus;
  }

  return statuses;
};

export const useApiStatus = (currentStatus = IDLE) => {
  const [status, setStatus] = useState(currentStatus);
  const statuses = useMemo(() => prepareStatuses(status), [status]);

  return {
    status,
    setStatus,
    ...statuses,
  };
};
