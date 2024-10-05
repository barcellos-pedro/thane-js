import "dotenv/config"

const CONFIG = {
  port: process.env.PORT,
  database: {},
}

export default function config({ key, defaultValue }) {
  return CONFIG[key] || defaultValue
}
