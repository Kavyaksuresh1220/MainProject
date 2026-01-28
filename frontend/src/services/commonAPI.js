import axios from 'axios'

const commonAPI = async(httmMethod,url,reqBody,reqHeader)=>{
    const reqConfig ={
        method : httmMethod,
        url,
        data:reqBody,
        headers:reqHeader
    }
    // api call usig Axioms
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}

export default commonAPI