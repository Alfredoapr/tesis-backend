import Thesis from "./Tesis.model";


const getAllThesis = async (req, res) => {
    try {
        const result = await Thesis.find();
        res.status(200).json({
            success: true,
            result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: JSON.stringify(error)
        });
    }
}

const createNewThesis = async (req, res) => {
    try {
        const values = req.body;

        const tesis = new Thesis({...values});
        const result = await tesis.save();

        // TODO: Buscar los sinodales y autores de la tesis

        res.status(200).json({
            succes: true,
            result
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: JSON.stringify(error)
        });
    }
}

const searchByQuery = async (req, res) => {
    const { tags, name } = req.query;
    try {

        const data = []

        if(tags) {
            const r = await Thesis.find({
                "tags": { "$in": [...tags.split(",")]}
            })
            r.forEach(doc => {
                data.push(doc);
            });
        }

        if(name) {
            const n = name.split(" ");
            const r = await Thesis.find({
                "name": {
                    "$regex": n[0],
                    "$options": "i"
                }
            })
            r.forEach(doc => {
                data.push(doc);
            });
        }


        res.json({ success: true, data })
    } catch (error) {
        res.status(400).json({ success: false, msg: error.message })
    }
}

export {
    getAllThesis,
    createNewThesis,
    searchByQuery
}