import { useCallback, useEffect, useRef, useState } from "react";

type Data<T> = {
  error?: unknown;
  data?: T;
  status?: number;
  ok?: boolean;
}[];

const useFetch = <T>(
  urls: string | string[]
): {
  request: () => Promise<void>;
  data: Data<T> | undefined;
  loading: boolean;
  error: boolean;
} => {
  const mounted = useRef(false);
  const controller = useRef(new AbortController());
  const [data, setData] = useState<Data<T>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = useCallback(async () => {
    const fetchUrls: string[] = Array.isArray(urls) ? urls : [urls];

    try {
      setError(false);
      setLoading(true);

      const requests = fetchUrls.map((url) =>
        fetch("http://localhost:5000", {
          signal: controller.current.signal,
          headers: {
            "Target-URL": url,
          },
        })
      );

      const responses = await Promise.allSettled(requests);

      const responsesData = Promise.all(
        responses.map(async (response) => {
          if (response.status === "fulfilled") {
            return {
              data: await response.value.json(),
              status: response.value.status,
              ok: response.value.ok,
            };
          }
          return { error: response.reason };
        })
      );

      setData(await responsesData);
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
  }, [urls]);

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
