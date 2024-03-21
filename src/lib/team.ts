
export const getTeam = async () => {
    const res = await fetch(`https://randomuser.me/api/?results=20`)
    const data = await res.json()
    
    return data
}

