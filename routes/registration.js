var express = require('express');
var router = express.Router();
var upload = require('./multer');
var pool = require('./pool');

/* GET home page. */
router.post('/studentinformation', function (req, res, next) {
  pool.query("insert into studentinfo(name, fname, email, number, gender, college, enrollment, course, semster, submitedat, submitedby, updatedat)values(?,?,?,?,?,?,?,?,?,?,?,?)",[req.body.studentname, req.body.fathername, req.body.emailaddress, req.body.mobilenumber, req.body.gender, req.body.college, req.body.enrollment, req.body.course, req.body.semester, req.body.submitedat, req.body.submitedby, req.body.updatedat], function (error, result) {
    if (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Server Error" });
    } 
    else {
      console.log(result);
      res.status(200).json({ status: true, message: "Submitted successfully" });
    }
  })
});

router.get("/studentlist", (req, res) => {

  pool.query('select * from studentinfo', (error, result) => {

      if (error) {
          res.status(500).json({ status: false, message: "Server Error" })
          console.log(error)

      }
      else {

          res.status(200).json({ status: true, data: result, message: "Fetch sucessfully" })
          console.log(result)

      }
  });
});

router.post('/studentupdate', function (req, res) {
  pool.query("update  studentinfo set name=?, fname=?, email=?, number=?, gender=?, college=?, enrollment=?, course=?, semster=?,submitedby=?, updatedat=? where studentid=?",[req.body.studentname, req.body.fathername, req.body.emailaddress, req.body.mobilenumber, req.body.gender, req.body.college, req.body.enrollment, req.body.course, req.body.semester, req.body.submitedby, req.body.updatedat,req.body.studentid], function (error, result) {

    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: " server error" })
    }
    else {
      console.log(result)
      res.status(200).json({ status: true, data: result[0], message: " updated succesfully" })
    }
  })
});

router.post('/delete_students', (req, res) => {

  pool.query("delete from studentinfo  where studentid=?", [req.body.studentid], function (error, result) {

    if (error) {
      console.log(error)
      res.status(500).json({ status: false, message: " server error" })
    }
    else {
      console.log(result)
      res.status(200).json({ status: true, data: result[0], message: " Deleted  succesfully" })
    }

  })
})




module.exports = router;
