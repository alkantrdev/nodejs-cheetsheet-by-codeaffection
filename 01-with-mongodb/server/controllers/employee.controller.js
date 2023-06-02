const express = require('express')
const router = express.Router()

const Employee = require('../models/employee.model')
const {generateCrudMethods} = require('../services')
const employeeCrud = generateCrudMethods(Employee)
const  {validateDbId, raiseRecord404Error} = require('../middlewares')

// router.get('/test', 
//     (req, res, next) => {next({})},
//     (req, res) => {res.send('foo')}
// )

router.get('/', (req, res, next) => {
    employeeCrud.getAll()
        .then(data => res.send(data))
        .catch(err => next(err))
})

router.get('/:id', 
    validateDbId,
    (req, res, next) => {
        employeeCrud.getById(req.params.id)
            .then(data => {
                if(data)
                    res.send(data)
                else
                  raiseRecord404Error(req, res)
            })
            .catch(err => next(err))
    }
)

router.post('/', (req, res, next) => {
    // req.body
    employeeCrud.create(req.body)
        .then(data => res.send(data))
        .catch(err => next(err))
})

router.put('/:id',validateDbId, (req, res, next) => {
    employeeCrud.update(req.params.id, req.body)
    .then(data => {
        if(data) res.send(data)
        else raiseRecord404Error(req, res)
    })
    .catch(err => next(err))
})

router.delete('/:id',validateDbId, (req, res, next) => {
    employeeCrud.delete(req.params.id, req.body)
    .then(data => {
        if(data) res.send(data)
        else raiseRecord404Error(req, res)
    })
    .catch(err => next(err))
})

module.exports = router