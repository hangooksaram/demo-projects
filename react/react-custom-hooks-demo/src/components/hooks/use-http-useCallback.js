import { useState, useCallback } from "react";

const useHttpUseCallback = (applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendHttpRequest = useCallback(
    async (requestConfig) => {
      const { url, method, headers, body } = requestConfig;
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url, {
          method: method ?? "get",
          headers: headers ?? {},
          body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();
        applyData(data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [applyData]
  );

  return {
    isLoading,
    error,
    sendHttpRequest,
  };
};

export default useHttpUseCallback;
