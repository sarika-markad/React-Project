import { useEffect, useState } from "react";
// API calls live in a separate service file to keep this component clean and focused
import { getRandomCatFact } from "../services/catService";
// Import our custom hook to use our context
import { useCatFacts } from "../context/CatFactsContext";

export default function FactPage() {

    const [fact, setFact] = useState("")
    // tracks whether the current fact has been added to favourites
    const [added, setAdded] = useState(false)
    const { addToFavourites } = useCatFacts()

    useEffect(() => {
        loadCat()
    }, [])

    async function loadCat() {
        const randomFact = await getRandomCatFact()
        setFact(randomFact)
        // reset feedback so the button is ready for the new fact
        setAdded(false)
    }

    function addCurrentFactToFavourites() {
        addToFavourites(fact)
        // flip to true to show feedback and disable the button
        setAdded(true)
    }

    return (
        <>
            <div className="m-4 mx-auto" style={{ maxWidth: "600px" }}>
                <h3>😼🦇 Random cat fact</h3>
                <p>{ fact || "Loading..." }</p>
                <div className="d-flex gap-2 align-items-center">
                    <button className="btn btn-primary" onClick={loadCat}>New fact</button>
                    {/* disabled stops the same fact being added twice */}
                    <button className="btn btn-success" onClick={addCurrentFactToFavourites} disabled={added}>
                        Add to favourites
                    </button>
                    {/* only renders after the button is clicked, resets when a new fact loads */}
                    {added && <span className="text-success">Added! ✓</span>}
                </div>
            </div>
        </>
    )
}