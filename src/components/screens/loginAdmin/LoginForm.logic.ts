/* eslint-disable prettier/prettier */
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {useState} from 'react';
import {useTemporalMsg} from '../../../hooks/messageHooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {InternalDatabase} from '../../../types/asyncStorageTypes';

type Form = {
  username: string;
  password: string;
};

const formInitialState: Form = {
  username: '',
  password: '',
};

export const useLoginForm = () => {
  const [form, setForm] = useState<Form>(formInitialState);
  const route = useRoute();
  const navigation =
    useNavigation<NavigationProp<ReactNavigation.RootParamList>>();
  const isAdmin = route.name == 'LoginAdmin';
  const [msg, setMsg] = useTemporalMsg(5000);

  const disabled = Object.keys(form).some(
    key => !form[key as keyof typeof form].trim(),
  );

  const changeHandler = ({key, text}: {text: string; key: keyof Form}) =>
    setForm(prevState => ({...prevState, [key]: text}));

  const submitHandler = async () => {
    const strDatabase = await AsyncStorage.getItem('@database');
    if (!strDatabase) {
      setMsg({text: 'Error al consultar la base', type: ''});
      return;
    }
    const database: InternalDatabase = JSON.parse(strDatabase);

    if (
      !(form.username in database) ||
      (isAdmin && form.username !== 'admin')
    ) {
      setMsg({text: 'Usuario equivocado', type: ''});
      return;
    }
    if (database[form.username].password !== form.password) {
      setMsg({text: 'Contraseña equivocado', type: ''});
      return;
    }
    setForm({...formInitialState});
    if (isAdmin) {
      navigation.navigate('UserManagment' as never);
    } else {
      navigation.navigate('UserInfo' as never, {
        name: database[form.username].name,
      } as never);
    }
  };

  return {
    form,
    disabled,
    isAdmin,
    msg: msg.text,
    setMsg,
    changeHandler,
    submitHandler,
  } as const;
};
