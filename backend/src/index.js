const express = require('express');
const cors = require('cors');
const app = express();

// CORS ayarları
const corsOptions = {
  origin: 'https://benbotdegilim.online',
  methods: ['GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204
};

// CORS middleware'ini uygula
app.use(cors(corsOptions));

// OPTIONS istekleri için özel handler
app.options('*', cors(corsOptions));

// ... existing code ... 