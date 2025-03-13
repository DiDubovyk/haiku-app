"use server";

function isAlphaNumeric(x) {
  const regex = /^[a-zA-Z0-9]*$/;
  return regex.test(x);
}

export const register = async function (prevState, formData) {
  const errors = {};

  const ourUser = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  if (typeof ourUser.username !== "string") ourUser.username = "";
  if (typeof ourUser.password !== "string") ourUser.password = "";

  ourUser.username = ourUser.username.trim();
  ourUser.password = ourUser.password.trim();

  if (ourUser.username.length < 3) {
    errors.username = "Username must be at least three characters";
  }

  if (ourUser.username.length > 30) {
    errors.username = "Username cannor exceed 30 characters!";
  }

  if (!isAlphaNumeric(ourUser.username)) {
    errors.username = "Username can only contain letters and numbers";
  }

  if (ourUser.username == "") {
    errors.username = "You must provide a username";
    }
    

    if (ourUser.password.length < 12) {
      errors.password = "Password must be at least 12 characters";
    }

    if (ourUser.password.length > 50) {
      errors.password = "Password cannor exceed 50 characters!";
    }

    if (ourUser.password == "") {
      errors.password = "You must provide a password";
    }

  if (errors.username || errors.password) {
    return {
      errors: errors,
      success: false,
    };
  }

    //storing a new user in database
    

  //log the user in by giving them cookie

  return {
    success: true,
  };
};
