const client = require('./redis')
const fun = async () => {
    console.log('hello')
    await client.hset('hash1', { 'dog': 'wuff wuff' })
    const output = await client.hget('hash1', 'dog');
    console.log(output);
    await client.hset('hash1', { 'dog': "hello" })
    const output1 = await client.hget('hash1', 'dog');
    console.log(output1);
    await client.hdel('hash1', 'dog');
    const output2 = await client.hget('hash1', 'dog')
    console.log(output2);
}
fun()