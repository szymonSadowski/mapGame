import { useQuery } from 'react-query';
import { getRecordsByUserId } from '../utils/queries';
import useSupabase from './useSupabase';

export function useRecordsQuery(user) {
  const client = useSupabase();
  const key = ['records', user.id];

  return useQuery(key, async () => {
    return getRecordsByUserId(client, user.id).then((result) => result.data);
  });
}
