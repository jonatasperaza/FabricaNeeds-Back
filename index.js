import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';
import postgres from 'postgres'
import { Payment, MercadoPagoConfig } from "mercadopago";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/payment')

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });
  