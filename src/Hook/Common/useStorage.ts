import AsyncStorage from '@react-native-async-storage/async-storage';
import KEY from '../../Util/constants/key.json';

export const AddStorage = async (value: any) => {
  try {
    const prevValue = await GetStorage();
    const jsonValue = {
      ...prevValue,
      ...value,
    };

    console.log(jsonValue);
    const convertValue = jsonValue ? JSON.stringify(jsonValue) : '';
    await AsyncStorage.setItem(KEY.ASYNC_KEY, convertValue);
  } catch (e) {
    console.error(` Storing Data From Async Storage  : ${e}`);
  }
};

export const GetStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(KEY.ASYNC_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error(` Reading Data From Async Storage  : ${e}`);
  }
};

export const RemoveStorage = async () => {
  try {
    await AsyncStorage.removeItem(KEY.ASYNC_KEY);
  } catch (e) {
    console.error(` Removing Data From Async Storage  : ${e}`);
  }
};
