import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

const MAPBOX_API_KEY = process.env.MAPBOX_API_KEY; // Replace with your Mapbox API key

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { originLat, originLong, destinationLat, destinationLong } = req.query;

    try {
      const response = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${originLong},${originLat};${destinationLong},${destinationLat}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${MAPBOX_API_KEY}`
          }
        }
      );

      if (!response.ok) {
        throw new Error('Error fetching directions.');
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error getting directions:', error);
      res.status(500).json({ error: 'Error getting directions' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
