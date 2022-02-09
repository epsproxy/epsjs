const fs = require("fs")
const ref = ["Friendship", "Couch", "Outcast", "Cloud", "Sparkle", "Moon", "Star", "Lightning", "Sun"]
function main() {
    const results = []
    for (let index = 0; index < 12345; index++) {
        const val = fs.readFileSync(`./json/${index}.json`)
        const obj = JSON.parse(val)
        let datum = ref.indexOf(obj.sigil)
        if (datum === -1) {
            datum = 0
        }

        results.push(datum)
    }

    fs.writeFileSync("./src/json/sigil.json", JSON.stringify(results))
}
main()
