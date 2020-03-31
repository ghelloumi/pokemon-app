export const formatComma = (a, i) => a.length - 1 > i ? ',' : ''
export const statColor = (a) => a < 50 ? "red" : a < 70 ? "orange" : "green"

export const saveFavList = (favList) => {
    try {
        const serializedState = JSON.stringify(favList);
        localStorage.setItem('favList', serializedState);
    } catch(e) {
        console.error(e)
    }
}

export const getFavList = () => {
    try {
        const serializedFavList = localStorage.getItem('favList');
        if (serializedFavList === null) {
            return undefined;
        }
        return {favList: JSON.parse(serializedFavList)}
    } catch (err) {
        return undefined;
    }
};
