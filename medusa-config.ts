import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL || "postgresql://medusa:medusa@postgres:5432/medusa",
    http: {
      storeCors: process.env.STORE_CORS || "*",
      adminCors: process.env.ADMIN_CORS || "*",
      authCors: process.env.AUTH_CORS || "*",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },
  admin: {
    vite: (config) => {
      config.server = config.server || {}
      config.server.allowedHosts = [
        "localhost",
        "127.0.0.1",
        "medusa-f6okof-431975-157-245-205-206.traefik.me"
      ]
      config.server.hmr = false
      return config
    }
  }
})
