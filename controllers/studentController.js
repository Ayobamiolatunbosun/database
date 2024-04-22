const Student = require('../models/studentModel')

exports.getAllStudents=(req, res)=>{
    Student.find()
    .then((student)=>{
        res.status(200)
        res.json(student)
    })
    .catch((error)=>{
        console.log(error)
        res.status(500)
        res.json(
            {message: 'error fectching students'}
            )
    })
    // res.status(200)
    // res.json({
    //     message:'all students gotten successfully'
    // })
}

exports.getSingleStudents=(req, res)=>{
    res.status(200)
    res.json({message:'single students gotten successfully'})
}

exports.createStudents=(req, res)=>{
    if (!req.body.name){
        res.status(400).json({message:'please enter your name'})
    }

    if (!req.body.email){
        res.status(400).json({message:'please enter your email'})
    }

    if (!req.body.phone){
        res.status(400).json({message:'please enter your phone'})
    }

    if (!req.body.password){
        res.status(400).json({message:'please enter your password'})
    }



    const newStudent = new Student({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    })

    newStudent.save()
    .then((ns)=>{
        res.status(201).json(ns)
    }).catch((error)=>{
        console.log(error)
        res.status(500).json({message: 'error creating students'})
    })
    // res.status(200)
    // res.json({
    //     message:'students created successfully'
    // })
}

exports.updateStudents=(req, res)=>{
    res.status(200)
    res.json({
        message:'students updated successfully'
    })
}

exports.deleteStudents=(req, res)=>{
    res.status(200)
    res.json({
        message:'students deleted successfully'
    })
}