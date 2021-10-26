import Author from "./Author.model";

const getAuthorById = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await Author.findById(id);
        res.json({ success: true, data })
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
}

export {
    getAuthorById
}