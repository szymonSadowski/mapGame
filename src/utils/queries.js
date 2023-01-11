export function getProfileByUserId(client, userId) {
  return client
    .from('profiles')
    .select(`username, website`)
    .eq('id', userId)
    .throwOnError()
    .single();
}

export function getRecordsByUserId(client, userId) {
  return client.from('records').select('*').eq('user_id', userId).throwOnError();
}

export async function updateProfile(client, params) {
  const updates = {
    id: params.id,
    username: params.username,
    updated_at: new Date().toISOString()
  };

  return client.from('profiles').upsert(updates).throwOnError();
}

export async function postScores(client, params) {
  let { data } = await client
    .from('records')
    .select('*')
    .match({ user_id: params.id, quiz: params.quiz });
  console.log(data);
  if (data.length > 0) {
    return client
      .from('records')
      .update([
        {
          updated_at: new Date().toISOString(),
          score: params.score
        }
      ])
      .eq('id', data[0].id)
      .throwOnError();
  } else {
    return client
      .from('records')
      .insert([
        {
          user_id: params.id,
          created_at: new Date().toISOString(),
          quiz: params.quiz,
          score: params.score,
          max_score: params.max_score
        }
      ])
      .single();
  }
}

export const getCountries = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  return res.json();
};
