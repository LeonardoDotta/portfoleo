import api from '../../../api'

export const loadRatings = () => {
    api.get('/ratings/all')
    .then((res) => {
        if(res.data.status=='success'){
            const data = res.data.data;
            console.log(res.data)
        }
        else{
            console.log('erro carregar peso',res.data);
        }
    }).catch((err)=>{
        console.log('erro carregar peso',err);
    })
}

export const sendRating = (data) => {
    api.post('/ratings/send', data)
    .then((res) => {
        if(res.data.status=='success'){
            const data = res.data.data;
            console.log(res.data)
        }
        else{
            console.log('erro carregar peso',res.data);
        }
    }).catch((err)=>{
        console.log('erro carregar peso',err);
    })
}