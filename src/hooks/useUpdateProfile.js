import { useMutation, useQueryClient } from 'react-query';
import { updateProfile } from '../utils/queries';
import useSupabase from './useSupabase';

export function useUpdateProfileMutation() {
  const client = useSupabase();
  const queryClient = useQueryClient();
  return useMutation(
    async (user) => {
      return updateProfile(client, user).then((result) => result.data);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.refetchQueries(['profile', variables.id]);
      }
    }
  );
}
