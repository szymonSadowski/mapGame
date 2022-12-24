import { useState } from 'react';
import { CountriesMap } from '../../components';
import { Layout } from '../../components/Layouts';

export default function AllCapitols() {
  const [guessedCapitols, setGuessCapitols] = useState([]);
  
  return (
    <Layout header>
      <main>
        <CountriesMap guessedCountries={guessedCapitols} />
      </main>
    </Layout>
  );
}
