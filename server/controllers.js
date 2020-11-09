module.exports = {
    getAllCars: (req, res) => {
        const db = req.app.get('db')

        db.get_all_cars()
            .then((cars) => {
                res.status(200).send(cars)
            }).catch(res.status(400).send('ERROR - Something bad happened'))
    },

    getCar: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.get_car(id).then((car) => {
            res.status(200).send(car)
        }).catch(res.status(400).send('ERROR - Something bad happened'))

    }
}