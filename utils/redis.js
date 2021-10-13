const Redis = require("ioredis");
const redis = new Redis({
    port: process.env.REDIS_PORT, // Redis port
    host: process.env.DB_HOST, // Redis host
    family: 4, // 4 (IPv4) or 6 (IPv6)
    db: 0,
});

module.exports = redis;