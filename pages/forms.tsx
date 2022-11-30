import React, { SyntheticEvent, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

//  better validation
//  better errors(set, clear, display)
//  have control over inputs
//  dont deal with events
//  Easier inputs

// !!input과 state를 자동으로 연결 register("key")
// {...register("username")} 가 사실 name="username" onChange={} 를 다해준다
// {...{key:1}} 은 key={1} 과 같다.

// !! watch()를 이용해 확인가능
// const { register, watch, handleSubmit } = useForm();
// console.log(watch());

type LoginForm = {
  username: string;
  password: string;
  email: string;
};


// userForm의 mode 는 검증 방식
// mode : "onChange" 입력 시 
// mode : "onBlur" 입력 후 포커스 아웃

export default function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange"
  });

  // console.log(watch());
  
  const onValid = (data: LoginForm) => {
    console.log("everything valid", data);
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "username is required",
          minLength: {
            message: "유저이름을 5자 이상 설정해주세요",
            value: 5,
          },
        })}
        type="text"
        placeholder="username"
      />
      {errors.username && (
        <span className="text-red-600">{errors.username.message}</span>
      )}
      <input
        {...register("email", {
          required: "email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail") || "지메일은 허용안되요",
          },
        })}
        type="email"
        placeholder="email"
        className={`${
          Boolean(errors.email?.message) ? "border-red-100" : "border-red-50"
        }`}
      />

      {errors.email && (
        <span className="text-red-600">{errors.email.message}</span>
      )}
      <input
        {...register("password", {
          required: "password is required",
          pattern: {
            value:
              /^(?!((?:[a-zA-Z]+)|(?:[0-9]+)|(?:[~`!@#$%^&*()_\-+=\[\]{}|\\;:‘“<>,.?\/]+))$)[a-zA-Z0-9~`!@#$%^&*()_\-+=\[\]{}|\\;:‘“<>,.?\/]{10,20}/,
            message:
              "영문/숫자/특수문자를 2가지 이상 조합해서 10~20자로 입력해 주세요.",
          },
        })}
        type="password"
        placeholder="password"
      />
      {errors.password && (
        <span className="text-red-600">{errors.password.message}</span>
      )}
      <input type="submit" value="제출" />
    </form>
  );
}

/* form validation convention way

export default function Forms() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onUserChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
    setError("");
  };
  const onEmailChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    setPasswordError("");
  };
  const onPasswordChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password, username);
    // form validation
    if (!username || !email || !password) {
      setError("입력해주세요");
    }
    if (email.includes("@")) {
      console.log("ok");
    }
    if (!email.includes("@")) {
      setError("이메일 형식입력");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={username}
        type="text"
        placeholder="username"
        onChange={onUserChange}
      />
      {error && <span style={{ color: "red" }}>{error}</span>}
      <input
        value={email}
        type="email"
        placeholder="email"
        onChange={onEmailChange}
      />
      {passwordError && <span>{ passwordError }</span>}
      <input
        value={password}
        type="password"
        placeholder="password"
        onChange={onPasswordChange}
      />
      <input type="submit" value="제출" />
    </form>
  );
}
*/
