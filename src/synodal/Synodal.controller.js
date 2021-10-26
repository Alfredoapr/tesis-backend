import Synodal from "./Synodal.model";

const getSynodalById = async(req, res) => {
    const { id } = req.params;

    try {
        const data = await Synodal.findById(id);
        res.json({ success: true, data })
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }try {
        
    } catch (error) {
        
    }
}

export {
    getSynodalById
}