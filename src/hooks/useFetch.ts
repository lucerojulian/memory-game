import { useEffect, useState } from 'react';

export const useFetch = <ResponseType>(url: string, skip: boolean = false) => {
  const [data, setData] = useState<ResponseType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    if (!skip) {
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((res: ResponseType) => {
          setData(res);
          setError(null);
        })
        .catch((e) => setError(e));
      setLoading(false);
    }
  }, [url, skip]);

  return { data, loading, error };
};
