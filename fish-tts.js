export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'Missing Authorization header' });
    }

    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const rawBody = Buffer.concat(chunks);

    const upstreamRes = await fetch('https://api.fish.audio/v1/tts', {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': req.headers['content-type'],
        'model': 'speech-1.6'
      },
      body: rawBody,
    });

    const arrayBuffer = await upstreamRes.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    if (!upstreamRes.ok) {
      return res.status(upstreamRes.status).send(buffer.toString('utf-8'));
    }

    res.setHeader('Content-Type', upstreamRes.headers.get('content-type') || 'audio/wav');
    return res.status(200).send(buffer);
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Proxy Fish Audio gagal' });
  }
}
