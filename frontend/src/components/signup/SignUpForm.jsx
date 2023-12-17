import { useForm } from "react-hook-form";
import {
  Button,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  ErrorMessage,
  FormContainer,
  FormGroup,
  Input,
  Label,
  LoginHeading,
} from "./style";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <LoginHeading>Login </LoginHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label>Username</Label>
          <Input
            {...register("username", {
              required: "Username is required",
            })}
          />
          {errors.username && (
            <ErrorMessage>{errors.username.message}</ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            type='password'
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </FormGroup>
        <FormGroup>
          <CheckboxContainer>
            <CheckboxInput
              type='checkbox'
              id='acceptTerms'
              {...register("terms", {
                required: "You need to accept to sign up",
              })}
            />
            <CheckboxLabel htmlFor='acceptTerms'>
              I accept the terms and conditions
            </CheckboxLabel>
          </CheckboxContainer>
          {errors.terms && <ErrorMessage>{errors.terms.message}</ErrorMessage>}
        </FormGroup>
        <Button type='submit'>Login</Button>
      </form>
    </FormContainer>
  );
};

export default SignUpForm;
