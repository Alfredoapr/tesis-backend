
import Teacher from "./Teacher.model";

const getAllTeacher = async (req, res) => {
    try {
        const result = await Teacher.find();
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

const createNewTeacher = async (req, res) => {
    try {
        const values = req.body;

        const teacher = new Teacher({...values});
        const result = await teacher.save();

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
    const { name,teacherId, email } = req.query;
    const data = []
    try {

        if(name) {
            const n = name.split(" ");
            const r = await Teacher.find({
                "name": {
                    "$regex": n[0],
                    "$options": "i"
                }
            })
            r.forEach(doc => {
                data.push(doc);
            });
        }

        if(teacherId) {
            const r = await Teacher.find({
                "teacherId": {
                    "$regex": teacherId,
                    "$options": "i"
                }
            })
            r.forEach(doc => {
                data.push(doc);
            });
        }

        if(email) {
            const r = await Teacher.find({
                "email": {
                    "$regex": email,
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
    getAllTeacher,
    createNewTeacher,
    searchByQuery
}

