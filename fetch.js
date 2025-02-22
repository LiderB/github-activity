

async function getEvents(username) {
    const url = `https://api.github.com/users/${username}/events`;

    try {
        const resp = await fetch(url);

        if(resp.status > 399 ) {
            throw Error(`respond status: ${resp.status}, message: ${resp.message}`);
        }
        
        const respBody = await resp.text();
        const eventArray = JSON.parse(respBody);
        return eventArray;

    } catch (error) {
        console.log(`${error.message}${url}`);
        process.exit(1);
    }


}




module.exports = {
    getEvents
}