
import { config } from 'dotenv';

config();

const env = {
    Server: {
        MODE: process.env.NODE_ENV,
        PORT: Number(process.env.PORT),
    },
    DB: {
        URL: process.env.DATABASE_URL
    },
    JWT: {
        ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
        REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
        ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN,
        REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN,
    },
    CORS: {
        ORIGIN: process.env.CORS_ORIGIN,
    },
};

export default env;