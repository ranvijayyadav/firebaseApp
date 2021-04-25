var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var logger = require('morgan');

var orderRouter = require('./routes/Oders/orders');

var app = express();
require('dotenv').config();


app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/users', usersRouter);
app.use('/orders', orderRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});
const port = 9321;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
module.exports = app;
