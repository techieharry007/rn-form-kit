import { useState, useEffect } from 'react';
import { FormErrors } from '../types';

export const useErrorHandler = () => {
  const [error, setError] = useState<FormErrors>({});
 
  useEffect(() => {
    let time: ReturnType<typeof setTimeout> | undefined;
    if (error)
        time = setTimeout(() => {
            setError({});
        }, 5000);

    return () => {
        if (time !== undefined) {
            clearTimeout(time);
        }
    };
}, [error]);

  return { error, setError};
};
