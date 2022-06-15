export default function errorHander(err, req, res, next) {
    if (err) res.status(500).json({error: error.stack})
}

