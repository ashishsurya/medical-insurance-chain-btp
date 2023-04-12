import { createHash } from 'crypto';
export const generateHash = (data) =>
  '0x' + createHash('sha256').update(data).digest('hex');
