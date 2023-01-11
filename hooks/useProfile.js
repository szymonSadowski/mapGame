import { useQuery } from 'react-query';
import { getProfileByUserId } from '../utils/queries';
import useSupabase from './useSupabase';

export function useProfileQuery(user) {
  const client = useSupabase();
  const key = ['profile', user.id];

  return useQuery(key, async () => {
    return getProfileByUserId(client, user.id).then((result) => result.data);
  });
}
