import { listCars } from '../../../lib/redis';

export default async function handler(req, res) {
    const cars = await listCars();
    
    res.status(200).json({ cars });
}