import Admin from "./Admin.model";

const createNewAdmin = async (req, res) => {
    try {
        const values = req.body;

        const administrador = new Admin({...values});
        const result = await administrador.save();

        // TODO: Relacion admin

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
