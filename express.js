const express = require('express')
const app = express()

const { mean, median, mode, callOperationOnNums, checkValuesAreNums } = require('./helper')
const {ExpressError} = require('./expressClasses')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/mean', (req, res, next) => {
    try {
        if (!req.query.nums) {
            next()
        }

        nums = checkValuesAreNums(req.query.nums.split(','))
        // Is there a better way to configure Error handing? Can I throw an error 
        // in my helper file so that my error handling is not as repetitious in each route?
        if (!nums[0]) { 
            throw new ExpressError(`${nums[1]} is not a number`, 400)
        } else {
            const result = callOperationOnNums(nums, mean)
            return res.json(result)
        }
    } catch (err) {
        return next(err)
    }
})

app.get('/median', (req, res, next) => {
    try {
        if (!req.query.nums) {
            next()
        }

        nums = checkValuesAreNums(req.query.nums.split(','))

        if (!nums[0]) { 
            throw new ExpressError(`${nums[1]} is not a number`, 400)
        } else {
            const result = callOperationOnNums(nums, median)
            return res.json(result)
        }
    } catch (err) {
        return next(err)
    }
})

app.get('/mode', (req, res, next) => {
    try {
        if (!req.query.nums) {
            next()
        }

        nums = checkValuesAreNums(req.query.nums.split(','))

        if (!nums[0]) { 
            throw new ExpressError(`${nums[1]} is not a number`, 400)
        } else {
            const result = callOperationOnNums(nums, mode)
            return res.json(result)
        }
    } catch (err) {
        return next(err)
    }
})

app.use(function(req, res, next) {
    const notFoundError = new ExpressError('nums are required', 400)
    return next(notFoundError)
})

app.use(function(err, req, res, next) {
    let status = err.status || 500
    let message = err.message

    return res.status(status).json({
        error: {message, status} 
    })
})

app.listen(3000, function() {
    console.log('Server is listening on port 3000')
})