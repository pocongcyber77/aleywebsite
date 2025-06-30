import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, email, phone, service, date, time } = req.body;

  if (!name || !email || !phone || !service || !date || !time) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const message = `
Halo Admin! Saya ingin melakukan booking studio.

Nama: ${name}
Email: ${email}
No. WhatsApp: ${phone}
Paket: ${service}
Tanggal: ${date}
Jam: ${time}
  `.trim();

  res.status(200).json({ message, phone: '6285133262359' });
} 