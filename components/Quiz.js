import { styled } from '@stitches/react';
import { React, useState } from 'react';
import { AllCountries } from './quizes';
import { blackA } from '@radix-ui/colors';
import { useQuery } from 'react-query';
import { Input } from '../styles';
import { capitalize } from '../utils';
import { getCountries } from '../api';

const InputContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  backgroundColor: '$subtleBackground',
  marginTop: '$10',
  padding: '$4'
});
const Answers = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
  color: 'white',
  backgroundColor: 'red',
  padding: '$4'
});

const Answer = styled('div', {
  padding: '$2'
});

export const Quiz = () => {
  const [guessedCountries, setGuessedCountries] = useState(['Spain']);
  const { data, error, isLoading } = useQuery('countries', getCountries);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  let countries = [];
  data.map((country) => {
    country.independent && countries.push(country.name.common);
  });
  const handleOnChange = (event) => {
    const guess = capitalize(event.target.value);
    if (countries.includes(guess)) {
      setGuessedCountries([...guessedCountries, guess]);
      event.target.value = '';
    }
  };
  console.log(countries);
  return (
    /// add progress bar
    <main>
      <AllCountries guessedCountries={guessedCountries} />
      <InputContainer>
        <Input placeholder={'Country'} onChange={handleOnChange} />
      </InputContainer>
      <Answers>
        {countries.map((country, index) => {
          return (
            <Answer key={country}>
              {index}.{guessedCountries.includes(country) ? <> {country}</> : null}
            </Answer>
          );
        })}
      </Answers>
    </main>
  );
};
