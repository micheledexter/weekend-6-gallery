var express = require('express');
var router = express.Router();
const pool = require('../modules/database.connection');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
// router.put('/like/:id', function (req, res) {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    const likes = req.body.likes + 1;
    pool.query(`UPDATE "gallery" SET "likes" = $1 WHERE "id" = $2;`, [
        likes, galleryId
    ]).then(response => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(`ERROR trying to PUT /gallery/like/:id: ${error}`);
        res.sendStatus(500);
    });
});

// GET Route
// router.get('/', function (req, res) {
//     res.send(galleryItems);
// }); // END GET Route

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "gallery"`).then(response => {
        res.send(response.rows);
    }).catch(error => {
        console.log(`ERROR trying to GET /gallery: ${error}`);
        res.sendStatus(500);
    });
});

// POST Route
router.post('/', (req, res) => {
    const entry = req.body;
    pool.query(`INSERT INTO "gallery" ("path", "description") VALUES ($1, $2);`, [
        entry.path,
        entry.description
    ]).then(response => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(`ERROR trying to POST /gallery: ${error}`);
        res.sendStatus(500);
    });
});

// DELETE Route
router.delete('/:id', (req, res) => {
    const target = req.params.id;
    pool.query(`DELETE FROM "gallery" WHERE "id" = $1;`, [target]).then(response => {
        res.sendStatus(200);
    }).catch(error => {
        console.log(`ERROR trying to DELETE /gallery/:id: ${error}`);
        res.sendStatus(500);
    });
});

module.exports = router;