import { check, validationResult } from "express-validator";

export const userValidator = [
  check("username").trim().not().isEmpty().withMessage("User name is missing"),
  check("email").isEmail().normalizeEmail().withMessage("Email is missing"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is missing!!")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be 8 to 20 characters long"),
];

export const validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (error.length) {
    return res.json({ error: error[0].msg });
  }
  next();
};
