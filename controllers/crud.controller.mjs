import fs from 'fs/promises';

export const getData = async (dataStr) => {
    try{
        const data = JSON.parse(await fs.readFile(`./data/${dataStr}.json`, 'utf-8'))
        return data;
    }catch(err){
       console.log(err);
    }
};

export const updateData = async (data, dataStr) => {
    try{
        await fs.writeFile(`./data/${dataStr}.json`, JSON.stringify(data));
    }catch(err){
       console.log(err);
    }
};