const auth = async (req, res, next) => {
  console.log("authenticate user");
  next();
};

export default auth;
