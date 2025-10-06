// const getStroedProudcts = () => {
//   const stroedDataSTR = localStorage.getItem("products");

//   if (stroedDataSTR) {
//     const stroedDataParse = JSON.parse(stroedDataSTR);
//     return stroedDataParse;
//   } else {
//     return [];
//   }
// };

// const addToStroedDB = (id) => {
//   const stroedDataParse = getStroedProudcts();

//   if (stroedDataParse.includes(id)) {
//     alert("id already exist");
//   } else {
//     stroedDataParse.push(id);
//     const data = JSON.stringify(stroedDataParse);
//     localStorage.setItem("products", data);
//   }
// };
// export { addToStroedDB, getStroedProudcts };


const getStroedProducts = ()=>{
    const stroedDataSTR = localStorage.getItem('products');
    if (stroedDataSTR){
        const stroedDataParse = JSON.parse(stroedDataSTR);
        return stroedDataParse
    }
    else{
        return [];
    }
}

const addToStroedDB = (id)=>{
    const stroedDataParse = getStroedProducts();
    if(stroedDataParse.includes(id)){
        alert('sorry vai id alreay exist');
    }
    else{
        stroedDataParse.push(id);
        const data = JSON.stringify(stroedDataParse);
        localStorage.setItem('products',data)
    }
}
export {addToStroedDB,getStroedProducts}