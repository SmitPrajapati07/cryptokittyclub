import {Configuration, OpenAIApi} from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const Configuration = new Configuration({
    apikey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(Configuration)