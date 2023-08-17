
const preMovie=async()=>{

    const husbandGetButter=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(`ticket`),3000);
    }) 
    const getColdDrinks= new Promise((resolve,reject)=>resolve(`Colddrinks is also here`));
    const getCandy =new Promise((resolve,reject)=>resolve(`candy is here `));
        let [Colddrinks,candy]=await Promise.all([getCandy,getColdDrinks,]);
        console.log(`${Colddrinks},${candy}`)
}