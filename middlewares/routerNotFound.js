module.exports = (req, res, next) => {
    const statusCode = 404;
    res.format({
        html: () => {
            res.status(statusCode).send('<h1>404 - pagina non trovata</h1>')
        },
        json: () => {
            res.status(statusCode).json({ statusCode, error: 'Pagina non trovata'});
        }
    })
    next();
}