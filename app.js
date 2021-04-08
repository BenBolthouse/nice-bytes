const { sequelize } = require('./db/models');
const { secret } = require('./config');
const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');
const collectionRouter = require('./routes/collection');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const express = require('express');
const favicon = require('serve-favicon');
const indexRouter = require('./routes/index');
const logger = require('morgan');
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const session = require('express-session');
const spotRouter = require('./routes/spots');
const usersRouter = require('./routes/users')

const app = express();

// view engine setup
app.set('view engine', 'pug');

// application config
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// set up session middleware
const store = new SequelizeStore({ db: sequelize });
app.use(
  session({
    name: 'nice-bytes.sid',
    secret,
    store,
    saveUninitialized: false,
    resave: false,
  })
);

// create session table if it doesn't already exist
store.sync();

// application routes
app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/api', apiRouter);
app.use('/spots', spotRouter);
app.use('/users', usersRouter);
app.use('/collections', collectionRouter);

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
  res.render('error');
});

module.exports = app;
