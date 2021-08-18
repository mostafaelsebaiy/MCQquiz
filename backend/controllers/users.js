import User from '../model/userModel.js';

const createUser = async (req, res) => {
  const name = req.body.name;
  const user = await User.create({ name });

  if (user) {
    return res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error('no questions found');
  }
};
export { createUser };

const createUser = async (req, res) => {
  const name = req.body.name;
  const user = await User.create({ name });

  if (user) {
    return res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error('no questions found');
  }
};
export { createUser };
