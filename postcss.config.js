module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    development: {
      client: 'sqlite3',
      connection: {
      filename: 'db.db'
      }
    }
  },
}
