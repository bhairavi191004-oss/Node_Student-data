const Student = require("../model/Student")

const registerstudent = async (req, res) => {
    let studentdata = req.body;
    console.log(studentdata);
    
    try{
        const existstudent = await Student.findOne({
            $or: [
                {email: studentdata.email},
                {phone: studentdata.phone}
            ]
        })
        if(existstudent){
            return res.send({"message":"Student data already registered"})
        }
        const student_data = new Student(studentdata)
        await student_data.save()
        res.send({"message":"Student data registered successfully"})
    }catch(err){
        res.send(err)
    }
}

const getallstudent = async (req, res) => {
    try {
        const students = await Student.find()
        res.send(students)
    } catch (err) {
        res.status(500).send(err)
    }
}

const updatestudent = async (req, res) => {
    try {
        const { id } = req.body
        const student = await Student.findByIdAndUpdate(
            id,
            req.body, 
            { new: true }
        )
        if (!student) {
            return res.send({ message: "Student not found" })
        }
        res.send({
            message: "Student updated successfully",
            data: student
        })
    } catch (err) {
        res.status(500).send(err)
    }
}

const deletestudent = async (req, res) => {
    try {
        const { id } = req.body
        const student = await Student.findByIdAndDelete(id)
        if (!student) {
            return res.send({ message: "Student not found" })
        }
        res.send({
            message: "Student deleted successfully"
        })
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = {registerstudent, getallstudent, updatestudent, deletestudent}