import Student from "./Student.model";

const getAllStudent = async (req, res) => {
    try {
        const result = await Student.find();
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

const createNewStudent = async (req, res) => {
    try {
        const values = req.body;

        const student = new Student({...values});
        const result = await student.save();

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
    const { name,studentId,email } = req.query;
    const data = []
    try {

        if(name) {
            const n = name.split(" ");
            const r = await Student.find({
                "name": {
                    "$regex": n[0],
                    "$options": "i"
                }
            })
            r.forEach(doc => {
                data.push(doc);
            });
        }

        if(studentId) { 
            const r = await Student.find({
                "studentId": {
                    "$regex": studentId,
                    "$options": "i"
                }
            })
            r.forEach(doc => {
                data.push(doc);
            });
        }

        if(email) {
            const r = await Student.find({
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
    getAllStudent,
    createNewStudent,
    searchByQuery
}