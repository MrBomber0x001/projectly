import express from 'express';

const app = new App(express());

app.sessionManagement();
app.middlewares();
app.routes();


await app.start();