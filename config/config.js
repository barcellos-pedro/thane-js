import "dotenv/config"

export const CONFIG = {
  port: process.env.PORT,
  appName: "Demo App",
  database: {},
  logger: {},
  cache: {},
  mailer: {},
}

export default function config({ key, defaultValue }) {
  return CONFIG[key] || defaultValue
}
