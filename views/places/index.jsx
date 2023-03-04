const React = require('react')
const Def = require('./default')

function index (data) {
    let placesFormatted = data.places.map((places) => {
        return (
            <div>
                <h2>{places.name}</h2>
                <img src={places.pic} alt={places.name}/>
            </div>
        )
    })
}

module.exports = index
