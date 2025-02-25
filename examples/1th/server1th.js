const fs = require("fs")

fs.readFile("data.json", (err, data) => {
    if (err) {
        throw err
    }

    const db = JSON.parse(data)

    const newUser = {
        userId: crypto.randomUUID(),
        id: 4,
        title: "amirhossein",
        body: "backend development"
    }

    db.push(newUser)

    console.log(db)

    fs.writeFile("data.json", JSON.stringify(db), (err) => {
        if (err) {
            throw err
        }else {
            console.log("successfull")
        }
    })


})