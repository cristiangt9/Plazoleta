import axios from "../adapters/axios";
import qs from "qs";
import { useCallback, useState } from "react";

const useAxioshttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    onError: false,
    message: "No error",
  });
  const sendRequest = useCallback((requestConfig, processData) => {
    setIsLoading(true);
    setError({
      onError: false,
      message: "No error",
    });
    let url = requestConfig.url;
    if (
      requestConfig?.method?.toLowerCase() === "get" ||
      !requestConfig?.method
    ) {
      url +=
        "?" + qs.stringify(requestConfig.data, { arrayFormat: "brackets" });
    }
    axios({
      method: requestConfig.method ?? "GET",
      url,
      headers: requestConfig.headers ?? { "Content-Type": "application/json" },
      data: requestConfig.data,
      paramsSerializer:  (requestConfig) => {
        if (
          requestConfig.method.toLowerCase() === "get" ||
          !requestConfig?.method
        ) {
          return qs.stringify(requestConfig.data, { arrayFormat: "brackets" });
        }
        return "";
      },
    })
      .then((response) => {
        response.data.success
          ? processData(response.data)
          : setError({
              onError: true,
              message: response.data.title,
            });
      })
      .catch((errorCatched) => {
        setError({
          onError: true,
          message: errorCatched.message || "Something went wrong!",
        });
        console.log(errorCatched);
        if (errorCatched?.response?.data)
          setError({
            onError: true,
            message:
              errorCatched?.response?.data.title || "Something went wrong!",
          });
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useAxioshttp;
