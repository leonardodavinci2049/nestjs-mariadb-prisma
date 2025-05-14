import 'dotenv/config';

import * as joi from 'joi';
// zod
// env_-schema não usar por enquanto altera o tsconfig
interface EnvVars {
  APP_API_URL: string;
  APP_SWAGGER_URL: string;

  APP_JWT_SECRET: string;
  APP_PORT: number;
}

const envsSchema = joi
  .object({
    APP_API_URL: joi.string().required(),
    APP_SWAGGER_URL: joi.string().required(),

    APP_JWT_SECRET: joi.string().required(),
    APP_PORT: joi.number().positive().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`❌ Invalid environment variables:  ${error.message}`);
}
const envVars: EnvVars = value;

export const envs = {
  APP_SWAGGER_URL: envVars.APP_SWAGGER_URL,
  APP_JWT_SECRET: envVars.APP_JWT_SECRET,
  APP_PORT: envVars.APP_PORT,
};
