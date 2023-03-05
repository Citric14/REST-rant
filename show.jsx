const React = require('react')
const Def = require('../default')

function show () {
        let comments = (
          <h3 className="inactive">
            No comments yet!
          </h3>
        )
        if (data.place.comments.length) {
            let sumRatings = data.place.comments.reduce((tot, c) => {
              return tot + c.stars
            }, 0)
            let averageRating = sumRatings / data.place.comments.length
            rating = (
              <h3>
                {averageRating} stars
              </h3>
        if (data.place.comments.length) {
            let averageRating = Math.round(sumRatings / data.place.comments.length)
            let stars = ''
            for (let i = 0; i < averageRating; i++) {
                stars += 'â­ï¸'
            }
          comments = data.place.comments.map(c => {
            return (
              <div className="border col-sm-4">
                <img src={data.place.pic} alt={data.place.name} />
                <h3>
                    Located in {data.place.city}, {data.place.state}
                </h3>
              </div>
            )
          })
        }
        return (
            <Def>
              <main>
                <div className="row">
                  ...
                  <div className="col-sm-6">
                    <h1>{ data.place.name }</h1>
                    <h2>
                      Rating
                    </h2>
                    {rating}
                    <br />
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <h4>
                        Serving {data.place.cuisines}
                    </h4>
                  </div>
                </div>
              </main>
            </Def>
          )
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>
          </main>
        </Def>
    )
}
}
module.exports = show




    