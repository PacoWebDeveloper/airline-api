const success = ({res, code, data}) => {
    res.status(code).json({
        code,
        data
    })
}

const error = ({res, code, data}) => {
    res.status(code).json({
        code,
        data
    })
}

module.exports = {
    success,
    error
}