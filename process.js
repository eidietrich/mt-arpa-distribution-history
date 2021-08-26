const fs = require('fs')

const getJson = (path) => JSON.parse(fs.readFileSync(path))

const writeJson = (path, data) => {
    fs.writeFile(path, JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('Written to', path);
    }
    );
}


const full = getJson('full.json')

const data = full.features.map(d => d.attributes)

if (data.length > 0) {
    // conditional here keeps existing data for null data result
    // const mtData = data.filter(d => d['State_name'] === 'Montana')

    // const keepKeys = [
    //     'County',
    //     'fips_code',
    //     'community_transmission_level'
    // ]

    // const mtDataCleaned = mtData.map(d => {
    //     const output = {}
    //     keepKeys.forEach(key => {
    //         output[key] = d[key]
    //     })
    //     return output
    // })

    writeJson('./mt-arpa-awards.json', data)
    // writeJson('./montana-cleaned.json', mtDataCleaned)

}