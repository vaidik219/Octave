require('dotenv').config()
const { google } = require('googleapis');
const sheets = google.sheets({ version: 'v4' })
const creds = './credentials.json'

module.exports = {
    route: "users/:email/:password",
    method: 'POST',
    run: async (req, res) => {
        const auth = await google.auth.getClient({
            keyFile: creds,
            scopes: ['https://www.googleapis.com/auth/spreadsheets']
        });

        const resource = {
            values: [[req.params.email, req.params.password]],
        };
        const spreadsheetId = process.env.DATABASE_ID
        const range = 'A:Z'

        const response = sheets.spreadsheets.values.append({
            auth,
            spreadsheetId,
            range,
            valueInputOption: 'USER_ENTERED',
            resource,
        })
        res.send(response.data)
    }
}