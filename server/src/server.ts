import express from "express";

const app = express()



app.get('/ads', (request, response) => {
  return response.json([
    {id: 1, name: "Gabi"},
    {id: 1, name: "Gabi"},
    {id: 1, name: "Gabi"},
    {id: 1, name: "Ana"}
  ])
})

app.listen(3333)