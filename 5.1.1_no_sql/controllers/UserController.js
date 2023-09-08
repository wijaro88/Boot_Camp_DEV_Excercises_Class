const {
    createUser
}=require('../services/UserService')
module.exports= {

    addUser: (req, res) => {
        const { name, email,password } = req.body;
        createUser({ name, email,password })
            .then((user) => {
                return res.status(201).send(user);
            })
            .catch((err) => {
                console.log('error importante adicionando una task',err);
                return res.status(501).send('hubo un error creando user');
            });

}
};