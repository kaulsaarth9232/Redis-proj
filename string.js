const client = require('./redis')
const fun = async () => {
    console.log('hello')
    // await client.lpush('list12', '12');
    // await client.lpush('list12', '13');
    // await client.lpush('list12', '14');
    // //adding elemets into list12
    // const var1 = await client.rpop('list12');
    // //pop element from list12
    // console.log(var1);
    // await client.get('set');
    // await client.sadd('set', '2');
    // await client.sadd('set', '5');
    // await client.sadd('set', '3');
    // const var1 = await client.smembers('set');
    // const obj = await client.hset('name', 'saarth');
    // const fieldsAdded = await client.hset(
    //     'bike:1',
    //     {
    //         model: 'Deimos',
    //         brand: 'Ergonom',
    //         type: 'Enduro bikes',
    //         price: 4972,
    //     },
    // )
    // const list2 = [1, 2, 3, 4]
    // await client.lpush('list22', list2);
    // const var2 = await client.lrange('list22', 0, 2);
    // console.log(var2)
    //     const user1 = '{"name":"Fred","age":25}'
    //     //await client.hset('user1', 'name', 'age');
    //     await client.lpush('list22', user1);
    //     const var2 = await client.lpop('list22');
    //     console.log(var2);
    //     JSON.parse(var2);
    //     console.log(var2.name);
    const str = await client.set('string1', 'saarth');
    const output = await client.get('string1');
    console.log(output)
    await client.set('string1', 'hemant')
    const output1 = await client.get('string1');
    console.log(output1);
}
fun()