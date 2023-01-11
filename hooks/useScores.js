import { useMutation } from 'react-query';
import { postScores } from '../utils/queries';
import useSupabase from './useSupabase';

export function useScoresMutation() {
  const client = useSupabase();

  return useMutation(async (params) => {
    return postScores(client, params).then((result) => result.data);
  });
}
