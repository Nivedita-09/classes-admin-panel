import prisma from "../../../../../config/dbConfig";
import { generateToken } from "../../../../../config/jwtConfig";
import { encrypt } from "../../../../../helpers/security";
import { validator } from "../../../../../helpers/validate";

export const POST = async (request) => {
  try {
    const bodyResponses = await request.json();
    const validatorRules = {
      name: "string",
      email: "string|email",
      password: "string",
      confirmPassword: "string",
    };

    const { err, status } = await new Promise((resolve) => {
      validator(bodyResponses, validatorRules, {}, (err, status) => {
        resolve({ err, status });
      });
    });
    const { name, email, password, confirmPassword } = bodyResponses;
    if (password !== confirmPassword) {
      return Response.json(
        {
          success: false,
          message: "Password and Confirm Password do not match",
          data: {},
        },
        {
          status: 400,
        }
      );
    }

    const encryptPassword = encrypt(password);

    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: encryptPassword,
      },
    });

    delete user.password;
    const token = await generateToken({
      id: user.id,
    });

    return Response.json(
      {
        success: true,
        message: "User created successfully",
        data: user,
        token: token,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        success: false,
        message: error.message,
        data: {},
        error,
      },
      {
        status: 500,
      }
    );
  }
};
