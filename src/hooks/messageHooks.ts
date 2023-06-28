/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';

type MSG = {text: string; type: 'error' | 'success' | ''};
const msgInitialState: MSG = {text: '', type: ''};
export const useTemporalMsg = (time: number) => {
  const [msg, setMsg] = useState<MSG>(msgInitialState);

  const initMsg = () => setMsg(msgInitialState);

  useEffect(() => {
    const unsubscribe = setTimeout(() => {
      initMsg();
    }, time);
    return () => clearTimeout(unsubscribe);
  }, [msg, time]);

  return [msg, setMsg, initMsg] as const;
};
