import Users from "../models/users";

class UsersController {
  static async getAll(req, res) {
    try {
      const users = await Users.getAll();

      res.status(200).json({ data: users });
    } catch (error) {
      console.log(error);
    }
  }

  static async create(req, res) {
    try {
      await Users.create(req.body);

      res.status(200).send();
    } catch (error) {
      console.log(error);
    }
  }
}

export default UsersController;
