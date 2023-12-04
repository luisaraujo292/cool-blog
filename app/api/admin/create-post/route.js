//Isso é um cod endpoind, Os endpoints de API são uma ferramenta poderosa para melhorar a conectividade da sua aplicação web. Ao criar endpoints para sua API, você pode conectar sua aplicação a serviços externos, permitir que os usuários acessem seus próprios dados e melhorar a conectividade interna da sua aplicação.

//O código lida com solicitações HTTP POST em Next.js. A função `POST` usa um parâmetro `request` que representa o objeto de solicitação HTTP recebido. Dentro da função: ●    O corpo da solicitação é analisado como JSON usando `request.json()` e atribuído à variável `requestBody`. ●    A data e a hora atuais são obtidas usando `new Date().toLocaleString()` e armazenadas em `createdDate`. ●    Um novo objeto post é criado espalhando as propriedades de `requestBody` e adicionando uma propriedade `date` com o valor `createdDate`. Então, ele é atribuído a `newPost`.

//O caminho do arquivo para "posts.json" é construído usando `path.join()` com o diretório de trabalho atual (`process.cwd()`), pasta "data" e nome do arquivo "posts.json". Ele é armazenado em `filePath`. ●    O conteúdo do arquivo é lido de forma síncrona usando `fs.readFileSync(filePath)` e armazenado em `fileData`. ●    O `fileData` é analisado em um objeto JavaScript usando `JSON.parse()` e atribuído a `data`. ●    O objeto `newPost` é adicionado ao array `data` usando `push()`. ●    O objeto `data` atualizado é gravado em "posts.json" usando `fs.writeFileSync(filePath, JSON.stringify(data))`. ●    Por fim, uma resposta JSON é retornada usando `NextResponse.json()`. A resposta contém uma propriedade `status` com o valor `CONSTANTS.RESPONSE_STATUS.OK` e uma propriedade `data` com um objeto `post` aninhado contendo a postagem recém-criada. No geral, esse código recebe uma solicitação POST, cria um novo objeto de postagem, adiciona-o a uma matriz de dados lidos de "posts.json", atualiza o arquivo com os dados mais recentes e retorna uma resposta JSON confirmando a criação bem-sucedida da postagem .

import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import CONSTANTS from '@/app/constants';

 
export async function POST(request) {
  
  // 1. Lê o corpo da requisição como JSON
  const requestBody = await request.json();

  // 2. Obtém a data atual como string formatada
  const createdDate = new Date().toLocaleString();

  // 3. Adiciona a data ao objeto recebido na requisição
  const newPost = {...requestBody,date: createdDate,};

   // 4. Obtém o caminho do arquivo onde os dados são armazenados
  const filePath = path.join(process.cwd(), 'data', 'posts.json');

   // 5. Lê o conteúdo do arquivo
  const fileData = fs.readFileSync(filePath);

  // 6. Converte o conteúdo do arquivo JSON para um objeto JavaScript
  const data = JSON.parse(fileData);

   // 7. Adiciona o novo post aos dados existentes
  data.push(newPost);
  
  // 8. Escreve os dados atualizados de volta ao arquivo
  fs.writeFileSync(filePath, JSON.stringify(data));

  // 9. Retorna uma resposta em formato JSON
  return NextResponse.json({
    status: CONSTANTS.RESPONSE_STATUS.OK,
    data: {
      post: newPost,
    },
  });
}