const getList = async (callback) => {
    const rHttp = await fetch("https://api.mocki.io/v1/4e53a662");
    const jList = await rHttp.json();
    callback(jList);
}

export default getList;
