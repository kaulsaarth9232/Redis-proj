const client = require('./redis')
const fun = async () => {
    console.log('hello')
    await client.lpush('lst', '12', '13', '14');
    const output = await client.lrange('lst', '0', '3');
    console.log(output);
    //await client.lset('lst', '11');
    const output1 = await client.lrange('lst', '0', '3');
    // await client.set('string1', 'hemant')
    // const output1 = await client.get('string1');
    console.log(output1);
    await client.lset('lst', '0', '35');
    const output2 = await client.lrange('lst', '0', '3');
    console.log(output2);
    // await client.del('string1');
}
fun()