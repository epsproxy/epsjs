const axios = require("axios")
const fs = require("fs")
async function scrap(index) {
    const resp = await axios(`https://fruuydfac2a4b4v5rip3ovqv5gg2sbaqgcgwnbnztlbt7xed7ela.arweave.net/LGlMDKAWgcDyvYoft1YV6Y2pBBAwjWaFuZrDP9yD-RY/${index}.json`)
    const attributes = resp.data.attributes
    let metadata = {
        sigil: "",
        rank: ""
    }
    const rug = findTrait(attributes, "Rug")
    if (rug) {
        metadata = { sigil: "Couch", rank: "None" }
        return { ...resp.data, ...metadata }
    }

    const bodyColour = findTrait(attributes, "Body Colour")
    if (bodyColour && bodyColour.value === "Outcast") {
        metadata = { sigil: "Outcast", rank: "None" }
        return { ...resp.data, ...metadata }
    }

    const sigil = findTrait(attributes, "Sigil")
    if (sigil) {
        const splitted = sigil.value.split(" ")
        const sigil = splitted[0]
        let rank = "None"
        if (splitted.length > 1) {
            rank = splitted[1]
        }
        metadata = { sigil, rank }
        return { ...resp.data, ...metadata }
    }

    return resp.data
}

function findTrait(attributes, trait_type) {
    const found = attributes.find((data) => {
        return data.trait_type === trait_type
    })

    return found
}

async function scrapSync(index) {
    const fpath = `./json/${index}.json`
    if (fs.existsSync(fpath)) {
        console.log(`scrap index: ${index} exist`)
        return
    }

    try {
        const result = await scrap(index)
        console.log(`scrap index: ${index} done`)
        fs.writeFileSync(fpath, JSON.stringify(result))
    } catch(e) {
        setTimeout(() => {
            scrapSync(index)
        }, 5000)
    }
}

async function main() {
    for (let index = 0; index < 12345; index++) {
        scrapSync(index)
        if (index % 1000 === 0) {
            await sleep(5000)
        }
    }
}

async function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, ms)
    })
}

main()
