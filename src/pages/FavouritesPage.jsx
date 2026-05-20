import { useCatFacts } from "../context/CatFactsContext"

export default function FavouritesPage() {

    const { favourites } = useCatFacts()

    return (
        <>
            <div className="m-4 mx-auto" style={{ maxWidth: "600px" }}>
                <h3>⭐ Favourite Cat Facts</h3>
                {/* show a message if there are no favourites, otherwise list them */}
                {favourites.length === 0 ? (
                    <p>No favourites yet!</p>
                ) : (
                    <ul className="list-group">
                        {/* i is the index - used as the key since facts are plain strings */}
                        {favourites.map((fact, i) => (
                            <li key={i} className="list-group-item">{fact}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}