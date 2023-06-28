/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';
import {useTemporalMsg} from '../../../hooks/messageHooks';
import {InternalDatabase} from '../../../types/asyncStorageTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useUserManagmentList = (reload: boolean) => {
  const [users, setUsers] = useState<InternalDatabase>({});
  const [msg, setMsg] = useTemporalMsg(5000);

  useEffect(() => {
    (async () => {
      const strDatabase = await AsyncStorage.getItem('@database');
      if (!strDatabase) {
        setMsg({text: 'Base de usuarios no encontrada', type: ''});
        return;
      }
      const database: InternalDatabase = JSON.parse(strDatabase);
      setUsers(database);
    })();
  }, [setMsg, reload]);

  return {msg: msg.text, users, setUsers} as const;
};
