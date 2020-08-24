import React, { useEffect, useState } from 'react';

import TechList from './components/TechList';
import RepoList from './components/RepoList';
import Message from './components/Message';
import Header from './components/Header';

import { getData } from './utils/functions';

import { Container, TextField, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import './app.css';

function App() {
  const [page, setPage] = useState(1);
  const [tech, setTech] = useState('');
  const [others, setOthers] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [per_page, setPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleChoice = async (language: string) => {
    if (language === 'others') {
      setShowForm(true);
      return;
    }
    setLoading(true);
    language !== tech && setPage(1);
    setTech(language);
    const response = await getData(language, page, per_page);
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    data && data.length > 0 && handleChoice(tech);
  }, [per_page, page]);

  return (
    <Container>
      <Header />
      <div className="techlist">
        <TechList handleChoice={handleChoice} />
        <div className={!showForm ? 'hide' : ''}>
          <TextField
            id="standard-basic"
            label="Digite a Linguagem"
            onChange={(e) => setOthers(e.target.value)}
          />
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => handleChoice(others)}
          >
            BUSCAR
          </Button>
        </div>
      </div>
      <div className="repolist">
        {data === undefined && (
          <Alert severity="error" color="error">
            ERRO: Pode ter ocorrido dois tipos de erros. Ou sua busca não
            retornou resultados ou a API do Github atingiu o limite de uso.
            Neste caso, aguarde um minuto e tente novamente.
          </Alert>
        )}
        {data && data.length > 0 ? (
          <RepoList
            data={data}
            loading={loading}
            page={page}
            setPage={setPage}
            per_page={per_page}
            setPerPage={setPerPage}
          />
        ) : (
          <Message loading={loading} />
        )}
      </div>
    </Container>
  );
}

export default App;
