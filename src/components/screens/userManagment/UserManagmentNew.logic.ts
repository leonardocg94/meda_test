/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {useTemporalMsg} from '../../../hooks/messageHooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {InternalDatabase} from '../../../types/asyncStorageTypes';

type Form = {
  name: string;
  username: string;
  password: string;
};
type FormPlaceholders = {
  [key in keyof Form]: 'Nombre' | 'Usuario' | 'Contraseña';
};
export const formPlaceholders: FormPlaceholders = {
  name: 'Nombre',
  username: 'Usuario',
  password: 'Contraseña',
};
const formInitialValue: Form = {name: '', username: '', password: ''};

export const useUserManagementNew = (reload: () => void) => {
  const [form, setForm] = useState<Form>(formInitialValue);
  const [msg, setMsg] = useTemporalMsg(5000);
  const disabled = Object.keys(form).some(
    key => !form[key as keyof Form].trim(),
  );

  const changeHandler = ({key, value}: {key: keyof Form; value: string}) =>
    setForm(prevState => ({...prevState, [key]: value}));

  const submitHandler = async () => {
    const strDatabase = await AsyncStorage.getItem('@database');
    const database: InternalDatabase = JSON.parse(strDatabase!);
    if (form.username in database) {
      setMsg({text: 'el usuario ya existe', type: 'error'});
      return;
    }
    database[form.username] = {name: form.name, password: form.password};
    await AsyncStorage.setItem('@database', JSON.stringify(database));
    reload();
    setForm({...formInitialValue});
    setMsg({text: 'Usuario agregado correctamente', type: 'success'});
  };

  return {form, msg, disabled, changeHandler, submitHandler} as const;
};
