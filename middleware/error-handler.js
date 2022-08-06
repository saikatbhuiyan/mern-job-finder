const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "there was a error!" });
};

export default errorHandlerMiddleware;
