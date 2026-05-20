import { createContext, useContext, useState } from "react";

// Creates the context - we pass null as the default value
const CatFactsContext = createContext(null)

// Wrap your app in this so all components can access the context
// { children } = whatever components are nested inside it
export function CatFactsProvider({ children }) {

    const [favourites, setFavourties] = useState(
        JSON.parse(localStorage.getItem('catFavourites')) || []
    ) 

    // Adds a new fact to the end of the favourites array
    // We use (prev =>) to make sure we always have the latest version of the array
    function addToFavourites(fact) {
        const updated = [...favourites, fact]
        localStorage.setItem('catFavourites', JSON.stringify(updated))
        setFavourties(updated)
    }

    return (
        // value is what all consumers can access
        <CatFactsContext.Provider value={{ favourites, addToFavourites }}>
            {children}
        </CatFactsContext.Provider>
    )
}

// Custom hook - makes it easy to use our context in any component
export function useCatFacts() {
    const context = useContext(CatFactsContext)
    // Throws an error if you forget to wrap your app in the provider
    if (!context) throw new Error("Please call from within CatFactsProvider")
    return context
}