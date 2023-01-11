import { quizesKeys } from '../consts/quizes';
import { InfoContainer, SectionTitle, TableContainer, Text } from '../styles';
import { Loading } from './Loading';

export const RecordTable = ({ records }) => {
  return (
    <InfoContainer>
      <TableContainer>
        <Text className={SectionTitle()}>Quiz</Text>
        <Text className={SectionTitle()}>Score</Text>
      </TableContainer>
      {records ? (
        <>
          {records.map((record) => {
            return (
              <TableContainer key={record.id}>
                <Text>{quizesKeys[record.quiz]}</Text>
                <Text>
                  {record.score} / {record.max_score}{' '}
                </Text>
              </TableContainer>
            );
          })}
        </>
      ) : (
        <Loading />
      )}
    </InfoContainer>
  );
};
