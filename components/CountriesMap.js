import { styled } from '../styles/stitches.config';
import { React } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { blackA } from '@radix-ui/colors';
import { QUIZ } from '../consts/quizes';
const Container = styled('main', {
  // height: '80%'
});
const QuizContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  height: 600,
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  backgroundColor: '$subtleBackground',
  '@bp2': {
    height: 200
  }
});
const defaultStyle = {
  default: {
    fill: 'hsl(153, 67.0%, 28.5%)',
    stroke: 'white',
    strokeWidth: 0.75,
    outline: 'none'
  },
  hover: {
    fill: 'hsl(140, 48.7%, 91.0%)',
    stroke: 'hsl(155, 40.0%, 14.0%)',
    strokeWidth: 1,
    outline: 'none'
  },
  pressed: {
    fill: '#FF5722',
    stroke: '#607D8B',
    strokeWidth: 0.75,
    outline: 'none'
  }
};

const guessedStyle = {
  default: {
    fill: 'hsl(151, 40.2%, 54.1%)',
    stroke: 'white',
    strokeWidth: 0.75,
    outline: 'none'
  },
  hover: {
    fill: 'hsl(141, 43.7%, 86.0%)',
    stroke: 'hsl(155, 40.0%, 14.0%)',
    strokeWidth: 1,
    outline: 'none'
  },
  pressed: {
    fill: '#FF5722',
    stroke: '#607D8B',
    strokeWidth: 0.75,
    outline: 'none'
  }
};
export const CountriesMap = ({ guessed, quiz, geoPlaces }) => {
  const mapWidth = 1000;
  const mapHeight = 500;
  return (
    <Container>
      <QuizContainer>
        <ComposableMap
          projectionConfig={{
            scale: 180
          }}
          width={mapWidth}
          height={mapHeight}
          style={{
            width: '100%',
            height: 'auto'
          }}>
          <ZoomableGroup
            translateExtent={[
              [0, 0],
              [mapWidth, mapHeight]
            ]}>
            <Geographies geography="/features.json">
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isCountryGuessed = guessed.includes(geo.properties.name);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={isCountryGuessed ? guessedStyle : defaultStyle}
                    />
                  );
                })
              }
            </Geographies>
            {quiz === QUIZ.ALLCAPITOLS && (
              <>
                {geoPlaces.map((place) => {
                  const isCapitolGuessed = guessed.includes(place.name);
                  return (
                    <Marker key={place.name} coordinates={[place.lng, place.lat]}>
                      <circle r={3} fill={isCapitolGuessed ? 'red' : 'transparent'} />
                    </Marker>
                  );
                })}
              </>
            )}
          </ZoomableGroup>
        </ComposableMap>
      </QuizContainer>
    </Container>
  );
};
