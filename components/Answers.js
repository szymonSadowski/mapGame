import { Answer, AnswersContainer, Text } from '../styles';

export const Answers = ({ geoPlaces, guessed }) => {
  return (
    <AnswersContainer>
      {geoPlaces.map((place, index) => {
        return (
          <Answer key={place.name}>
            <Text>
              {' '}
              <>{index + 1}. </>
              {guessed.includes(place.name) ? <>{place.name}</> : null}
            </Text>
          </Answer>
        );
      })}
    </AnswersContainer>
  );
};
