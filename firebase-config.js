/*
  CONFIGURAÇÃO DO FIREBASE - Controle de Motoristas
  --------------------------------------------------
  Este arquivo conecta o app ao seu banco de dados Firebase, para que
  o histórico seja o MESMO em qualquer computador/celular que acessar
  a página (não fica mais preso a um navegador só).

  COMO PREENCHER:
  1. Crie um projeto gratuito em https://console.firebase.google.com
  2. No projeto, ative o "Firestore Database" (modo produção ou teste)
  3. Vá em: ícone de engrenagem > Configurações do projeto > Geral
     > role até "Seus aplicativos" > clique no ícone "</>" (Web)
     > registre um app (não precisa de Hosting)
  4. O Firebase vai mostrar um bloco "firebaseConfig" com várias chaves.
     Copie cada valor para os campos abaixo, substituindo "COLE_AQUI".
  5. Salve este arquivo e suba (commit) no GitHub junto com os outros.

  Mantenha este arquivo na MESMA PASTA do index.html / controle-motoristas.html.
*/

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAzvQ4cFWYA6VuuihrFCrsWTd0oOXLH1B0",
  authDomain: "expedicao-6d4d9.firebaseapp.com",
  projectId: "expedicao-6d4d9",
  storageBucket: "expedicao-6d4d9.firebasestorage.app",
  messagingSenderId: "755319754152",
  appId: "1:755319754152:web:66b701d4984b0f24f1a19d",
  measurementId: "G-BESWN3Q48W"
};
