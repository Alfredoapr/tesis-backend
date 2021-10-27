
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
    const { tags, name, year, thesisId, school, status, resume } = req.query;
    const data = []
    try {


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

        if(year) {
            const y = Number(year);
            const r = await Thesis.find({
                "year": y
            });
            r.forEach(doc => {
                data.push(doc);
            })
        }

        if(thesisId) {
            const r = await Thesis.find({
                "thesisId": {
                    "$regex": thesisId,
                    "$options": "i"
                }
            })
            r.forEach(doc => {
                data.push(doc);
            });
        }

        if(school) {
            const r = await Thesis.find({
                "school": {
                    "$regex": school,
                    "$options": "i"
                }
            })
            r.forEach(doc => {
                data.push(doc);
            });
        }

        if(status) {
            const y = Number(status);
            const r = await Thesis.find({
                "status": y
            });
            r.forEach(doc => {
                data.push(doc);
            })
        }

        if(resume) {
            const r = await Thesis.find({
                "resume": {
                    "$regex": resume,
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

const uploadPdf = async (req, res) => {
    
}

export {
    getAllThesis,
    createNewThesis,
    searchByQuery
}