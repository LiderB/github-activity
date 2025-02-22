const { getEvents } = require("./fetch.js")

async function main() {
    console.log(await getEvents("LiderB"));

}

main();

