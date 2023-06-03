import SignupForm from "../../../components/forms/SignupForm";

const SigninPage = () => {
  return (
    <div className="flex flex-col justify-top items-center z-10 h-full w-full">
    <h1 className="z-10">Sign up</h1>
    <SignupForm />
    </div>
  );
};

export default SigninPage;
