export const GET = async (request) => {
  try {
    const { email, password } = request.query;

    const validatorRules = {
      email: "string|email",
      password: "string",
    };

    const { err, status } = await new Promise((resolve) => {
      validator({ email, password }, validatorRules, {}, (err, status) => {
        resolve({ err, status });
      });
    });

    if (err) {
      return Response.json(
        {
          success: false,
          message: "Invalid credentials",
          data: {},
        },
        {
          status: 400,
        }
      );
    }

    const user = await prisma.users.findFirst({
      where: { email, password: encrypt(password) },
    });

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "Invalid credentials",
          data: {},
        },
        {
          status: 400,
        }
      );
    }

    const token = await generateToken({
      id: user.id,
    });

    const otp = Math.floor(1000 + Math.random() * 9000);

    return Response.json(
      {
        success: true,
        message: "Login Successful",
        data: {
          user,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        success: false,
        message: "Internal Server Error",
        data: {},
      },
      {
        status: 500,
      }
    );
  }
};
