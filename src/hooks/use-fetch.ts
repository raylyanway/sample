import { useCallback, useEffect, useRef, useState } from "react";

const useFetch = <T>(
  url: string
): {
  request: () => Promise<void>;
  data: T | undefined;
  loading: boolean;
  error: boolean;
  badRequestStatus: number | undefined;
} => {
  const mounted = useRef(false);
  const controller = useRef(new AbortController());
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [badRequestStatus, setBadRequestStatus] = useState<number>();

  const request = useCallback(async () => {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000", {
        signal: controller.current.signal,
        headers: {
          "Target-URL": url,
        },
      });

      if (res.ok) {
        const json: T = await res.json();
        setData(json);
      } else {
        setBadRequestStatus(res.status);
        // eslint-disable-next-line no-console
        console.error(`Ошибка HTTP: ${res.status}`);
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
    badRequestStatus,
  };
};

export default useFetch;
