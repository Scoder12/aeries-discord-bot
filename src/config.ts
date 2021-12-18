import { z } from "zod";

const schema = z.object({
  TOKEN: z.string(),
  DATABASE_URL: z.string(),
  AERIES_DOMAIN: z.string(),
});
export const CONFIG = schema.parse(process.env);
