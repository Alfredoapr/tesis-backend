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

export {
    getAllThesis,
    createNewThesis
}