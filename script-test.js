// eslint-disable-next-line import/no-unresolved
const shell = require('shelljs');

// eslint-disable-next-line no-console
console.log('Olá mundo');

// saber quais arquivos estão diferentes da main
const resultado = shell.exec('git diff --name-only branch-scripts-testes..main', { silent: true });

// eslint-disable-next-line no-console
console.log(resultado.stdout.split('\n'));
