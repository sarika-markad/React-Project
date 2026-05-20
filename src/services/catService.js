const CAT_URL = "https://catfact.ninja/fact"

export async function getRandomCatFact() {
    // fetch the data from the API and wait for it to respond
    const response = await fetch(CAT_URL)
    // the response is raw HTTP - .json() converts it to a JavaScript object
    const data = await response.json()
    // the API returns more than we need, so we just return the fact string
    return data.fact
}