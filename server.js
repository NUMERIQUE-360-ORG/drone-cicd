require('http').createServer((r, q) => q.end(JSON.stringify({ status: 'OK' }))).listen(3000, '0.0.0.0', () => console.log(`BAZINGA...`));
