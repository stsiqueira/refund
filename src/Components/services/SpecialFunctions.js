
export const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export const addData = async (url, refund) => {
    fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(refund)
    })
}