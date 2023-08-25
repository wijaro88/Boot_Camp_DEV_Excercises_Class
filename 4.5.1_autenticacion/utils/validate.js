const jwt = require('jsonwebtoken');

const valiateJWT = (request,response,next) =>{
    const autHeader =request.get ('Autorization');
    const accessToken= autHeader.split('')[1];
    jwt.verify(accessToken, SECRET_KEY,(error,decode)=>{
        if (error){
            response.status(401).send
        }

    })
};

module.exports= valiateJWT;
