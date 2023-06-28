/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {UserManagmentNew} from './UserManagmentNew';
import {UserManagmentList} from './UserManagmentList';

export const UserManagementScreen = () => {
  const [showNew, setShowNew] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);
  const cancelHandler = () => setShowNew(false);
  const addNewHandler = () => setShowNew(true);

  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 20}}>
      {showNew ? (
        <UserManagmentNew
          onCancel={cancelHandler}
          reload={() => setReload(prevState => !prevState)}
        />
      ) : (
        <UserManagmentList onAddNew={addNewHandler} reload={reload} />
      )}
    </SafeAreaView>
  );
};
