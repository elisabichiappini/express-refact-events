module.exports = (err, req, res, next) => {
    const statusCode = 500;
    res.format({
        html: () => {
            res.status(statusCode).send('qualcosa non è andato a buon fine, '+ err.message)
        },
        json: () => {
            res.status(statusCode).json({statusCode, error: err.message, stack: err.stack })
        },
    });
};