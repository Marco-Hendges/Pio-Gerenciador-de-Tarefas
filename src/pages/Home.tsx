import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonImg, IonRow, IonCol } from '@ionic/react';

/* Estilo global */
import './Home.css';

const Home: React.FC = () => {
  const [imagens, setImagens] = useState<string[]>([]);

  const mostraImagem = () => {
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": "DEMO-API-KEY",
    });

    const requestOptions: RequestInit = {
      method: 'GET',
      headers: headers,
      redirect: 'follow',
    };

    fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setImagens((prevImagens) => [...prevImagens, result[0].url]);
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PIO - Gerenciador de Tarefas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding fundo">
        <h1 className="titulo">
          Bem-vindo ao Meu site
          <img
            style={{ margin: "10px" }}
            src="https://www.unijui.edu.br/images/stories/manual_identidade/marcas/download.php?arquivo=marca.jpg"
            alt="Unijui"
            width="50px"
          />
        </h1>
        <p>Este é um parágrafo de exemplo.</p>

        <IonButton onClick={mostraImagem} expand="block">
          Mostrar Gato
        </IonButton>

        <div className="secao">
          <h2 className="texto-verde">Seção Importante</h2>
          <p>Esse é uma seção com conteúdo relevante</p>
        </div>

        <IonRow className="row">
          {imagens.map((imagem, index) => (
            <IonCol size="12" sizeMd="6" key={index}>
              <IonImg src={imagem} className="imagens-galeria" alt="Gato" />
            </IonCol>
          ))}
        </IonRow>
      </IonContent>
    </>
  );
};

export default Home;
