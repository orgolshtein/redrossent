import fs from 'fs/promises';

export const getAdmins = async () => {
    try{
        const admins = JSON.parse(await fs.readFile(`./data/admin-users.json`, 'utf-8'))
        return admins;
    }catch(err){
       console.log(err);
    }
};

export const adminLogin = async (loginObj) => {
    try {
        const adminList = await getAdmins();
        const matchedUsername = adminList.find(admin=>admin.username === loginObj.username);
        if (matchedUsername){
            return matchedUsername.password === loginObj.password?
            matchedUsername : false
        } else {
            return false
        }
    }catch(err){
       console.log(err);
    }
}