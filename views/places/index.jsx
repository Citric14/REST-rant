const React = require('react')
const Def = require('./default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>
                    <a href={`/places/${place.id}`} >
                    {places.name}
                    </a>
                </h2>
                <img src={places.pic} alt={places.name}/>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = index
