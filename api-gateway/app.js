require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const courseRouter = require('./routes/courses');
const chaptersRouter = require('./routes/chapters');
const lessonsRouter = require('./routes/lessons');
const mediaRouter = require('./routes/media');
const ordersRouter = require('./routes/orders');
const PaymentsRouter = require('./routes/payments');
const refreshTokensRouter = require('./routes/refreshTokens');
const mentorsRouter = require('./routes/mentors');
const imageCoursesRouter = require('./routes/imageCourses');
const reviewsRouter = require('./routes/reviews');
const myCoursesRouter = require('./routes/myCourses');

const verifyToken = require('./middlewares/verifyToken');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', courseRouter);
app.use('/lessons', verifyToken, lessonsRouter);
app.use('/chapters', verifyToken, chaptersRouter);
app.use('/media', mediaRouter);
app.use('/orders', ordersRouter);
app.use('/payments', PaymentsRouter);
app.use('/refresh-tokens', refreshTokensRouter);
app.use('/mentors', verifyToken, mentorsRouter);
app.use('/image-courses', verifyToken, imageCoursesRouter);
app.use('/reviews', verifyToken, reviewsRouter);
app.use('/my-courses', verifyToken, myCoursesRouter);

module.exports = app;