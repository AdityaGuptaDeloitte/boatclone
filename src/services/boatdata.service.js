import axios from 'axios';

export let dataServiceObj = 
{
    getAllProds,
    getProdById,
    addProds,
    updateProd,
    deleteProd
};



let url = "http://localhost:3500/products/";

function getAllProds(params)
{
    if(params) return axios.get(`http://localhost:3500/products${params}`)
    else return axios.get(url);
}


function addProds(prodsObj)
{
    return axios.post(url, prodsObj);
}

function deleteProd(pid)
{
    return axios.delete(url + pid);
}


function getProdById(pid)
{
    return axios.get(url + pid);
}

function updateProd(prodsObj)
{
    return axios.put(url + prodsObj.Product_ID, prodsObj);
}

