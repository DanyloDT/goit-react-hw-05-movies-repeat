import { useEffect, useState } from 'react';

export const useHttp = (apiFn, initialState, params) => {
  const [data, setData] = useState(initialState);
  useEffect(() => {
    apiFn(params)
      .then(setData)
      .catch((err) => {
        console.log(err);
      });
  }, [apiFn, params]);

  return [data, setData];
};
