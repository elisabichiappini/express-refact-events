const index = (req, res) => {
    res.send('sono index di reservetion')
}

const store = (req, res) => {
    res.send('sono store di reservation')
}

const destroy = (req, res) => {
    res.send('sono destroy di reservation')
}

module.exports = {
    index, store, destroy
}