
const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 2010;

const { sequelize } = require('./models');
const productRouter = require('./routers/productRouter');

const app = express();

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use(productRouter);

const startServer = async () => {
    try {
        await sequelize.authenticate();

        console.log('Database connected successfully');

        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`);
        });

    } catch (error) {
        console.error('Database connection failed:', error);
    }
};

startServer();
