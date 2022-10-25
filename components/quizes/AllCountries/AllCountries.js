import { styled } from '@stitches/react';
import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { blackA } from '@radix-ui/colors';
// import './styles.css';

export const AllCountries = () => {
  const guessedCountries = ['Venezuela'];
  return (
    <ComposableMap>
      <Geographies geography="/features.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill={guessedCountries.includes(geo.properties.name) ? 'red' : 'yellow'}
              stroke="#EAEAEC"
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};
