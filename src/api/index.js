const BASE_URL = 'https://api.jikan.moe/v4'

export const searchAnime = async (query = "") => {
    try {
        const {data} = await fetch(`${BASE_URL}/anime?q=${query}&skip=0&limit=10`).then(res=> res.json())
        return data;
    } catch (error) {
        console.error(error)
    }
}

export const getAnimeDetails = async (id)=> {
    try {
        const { data } = await fetch(`${BASE_URL}/anime/${id}`).then(res=> res.json())
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getAnimeNewsById = async (id)=> {
    try {
        const { data } = await fetch(`${BASE_URL}/anime/${id}/news`).then(res=> res.json())
        return data
    } catch (error) {
        console.error(error)
    }
}