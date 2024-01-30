const client = require('./redis')
const fun = async () => {
    console.log('hello')
    await client.sadd('set1', '10', '2', '50', '18');
    const output = await client.smembers('set1');
    console.log(output);
    await client.srem('set1', '10');
    const output1 = await client.smembers('set1');
    console.log(output1);
}
fun()