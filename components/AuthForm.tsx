"use client";
import {
  EmailOutlined,
  LockOutlined,
  PersonOutline,
} from "@mui/icons-material";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

interface FormData {
  username?: string; // Make it optional because we don't need it for login page
  email: string;
  password: string;
}

const AuthForm = ({ type }: { type: "register" | "login" }) => {
  const router = useRouter();
  const [isLoading, SetIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues:
      type === "register"
        ? { username: "", email: "", password: "" }
        : { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    let res;

    if (type === "register") {
      SetIsLoading(true);
      res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/login");
      } else {
        toast.error("Something went wrong");
      }
    }

    if (type === "login") {
      res = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (res && res.ok) {
        SetIsLoading(true);
        router.push("/");
      } else {
        toast.error("Invalid credentials");
      }
    }
  };

  return (
    <div className="auth">
      <div className="overlay">
        <div className="content">
          <p className=" text-slate-100 sm:flex justify-center items-center text-center font-bold">
            Browse the latest movie trailers with us
          </p>
          <img src="/assets/keipix.png" alt="logo" className="logo" />

          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {type === "register" && (
              <>
                <div className="input">
                  <input
                    {...register("username", {
                      required: "Username is required",
                      validate: (value: string | undefined) => {
                        if (!value || value.length < 2) {
                          return "Username must be at least 2 characters long";
                        }
                        return true;
                      },
                    })}
                    type="text"
                    placeholder="Username"
                    className="input-field"
                  />
                  <PersonOutline sx={{ color: "white" }} />
                </div>
                {errors.username && (
                  <p className="error">{errors.username.message}</p>
                )}
              </>
            )}

            <div className="input">
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="Email"
                className="input-field"
              />
              <EmailOutlined sx={{ color: "white" }} />
            </div>

            {errors.email && <p className="error">{errors.email.message}</p>}

            <div className="input">
              <input
                {...register("password", {
                  required: "Password is required",
                  validate: (value: string | undefined) => {
                    if (
                      !value ||
                      value.length < 6 ||
                      value.length > 20 ||
                      !value.match(/[!@#$%^&*()_+\-=[\]{};':"\\.,<>/?]+/)
                    ) {
                      return "Password must be at between 6 to 20 characters with one special character";
                    }
                    return true;
                  },
                })}
                type="password"
                placeholder="Password"
                className="input-field"
              />
              <LockOutlined sx={{ color: "white" }} />
            </div>

            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}

            <button className="button" type="submit">
              {isLoading ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : (
                <>{type === "register" ? "Join now" : "Login Now"}</>
              )}
            </button>
          </form>

          {type === "register" ? (
            <Link href="/login">
              <p className="link">Already have an account? Login here</p>
            </Link>
          ) : (
            <Link href="/register">
              <p className="link">Don't have an account? Register here</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
