import { useCallback, useEffect, useRef, useState } from "react";

const useFetch = <T>(
  url: string
): {
  request: () => Promise<void>;
  data: T | undefined;
  loading: boolean;
  error: boolean;
} => {
  const mounted = useRef(false);
  const controller = useRef(new AbortController());
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000", {
        signal: controller.current.signal,
        headers: {
          "Target-URL": url,
        },
      });

      if (response.ok) {
        const json: T = await response.json();
        setData(json);
      } else {
        // eslint-disable-next-line no-console
        console.error(`Ошибка HTTP: ${response.status}`);
      }
    } catch (e) {
      if (!mounted.current) {
        return;
      }

      setError(true);
      // eslint-disable-next-line no-console
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    mounted.current = true;
    const fetching = controller.current;

    return () => {
      mounted.current = false;
      fetching.abort();
    };
  }, [mounted]);

  return {
    request,
    data,
    loading,
    error,
  };
};

export default useFetch;
