import {useAppContext} from '../../Contexts/AppContext';

export default function useToast() {
  const {setToast} = useAppContext();

  const AddNewToast = ({
    id,
    message,
    time,
  }: {
    id: string;
    message: string;
    time: number;
  }) => {
    setToast(prev => [
      {
        id: id,
        message: message,
        onPress: () => {
          RemoveToast(id);
        },
      },
      ...prev,
    ]);
    setTimeout(() => {
      RemoveToast(id);
    }, time);
  };

  const RemoveToast = (id: string) => {
    setToast(prev => prev.filter(item => item.id !== id));
  };

  const ShowCustomToast = (message: string) => {
    const newToastId = new Date().getMilliseconds().toString();
    AddNewToast({id: newToastId, message: message, time: 3000});
  };

  return ShowCustomToast;
}
