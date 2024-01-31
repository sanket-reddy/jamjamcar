// pages/api/db.js

import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

const pool = new Pool({
  connectionString:
    "postgresql://pathuri.sanketh:VklD3TM5sxuc@ep-rapid-frog-a1qr6itn.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM yourtable");
    const results = { results: result ? result.rows : null };
    res.status(200).json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
