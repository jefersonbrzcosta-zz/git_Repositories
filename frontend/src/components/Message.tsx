import React from 'react';
import { Typography } from '@material-ui/core';
import { BeatLoader } from 'react-spinners';

interface Props {
  loading: boolean;
}

const Message = ({ loading }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 45,
      }}
    >
      {loading ? (
        <BeatLoader />
      ) : (
        <>
          <Typography variant="h4" component="h2">
            Seja bem vindo!
          </Typography>
          <Typography variant="h6" component="h2">
            Aqui você poderá listar repositórios do Github de acordo com sua
            linguagem de programação.
          </Typography>
          <Typography variant="body1" component="h2">
            Clique ao lado e começe a navegar agora mesmo.
          </Typography>
        </>
      )}
    </div>
  );
};

export default Message;
