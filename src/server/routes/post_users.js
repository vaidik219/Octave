require('dotenv').config()

const { google } = require('googleapis');
const sheets = google.sheets({ version: 'v4' })
const path = require("path") 
const creds = path.join(process.cwd(), 'credentials.json');

module.exports = {
    route: "users",
    method: 'POST',
    run: async (req, res) => {
        try {
            const { email, password } = req.query
            const auth = await google.auth.getClient({
                keyFile: creds,
                scopes: ['https://www.googleapis.com/auth/spreadsheets']
            });

            const resource = {
                values: [[email, password]],
            };
            const spreadsheetId = process.env.SHEET_ID
            const range = 'Accounts!A:Z'

            sheets.spreadsheets.values.append({
                auth,
                spreadsheetId,
                range,
                valueInputOption: 'USER_ENTERED',
                resource,
            })

            res.status(200).json({
                status: 200,
                message: "OK",
            })
        } catch (e) {
            console.log(e)
            res.status(500).json({
                status: 500,
                message: "Internal Server Error"
            })
        }
    }
}