import RegisterForm from "./components/RegisterForm";
const backgroundStyles = {
  background: "url('/form-bg.svg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const RegisterPage = () => {
  return (
    <div
      style={backgroundStyles}
      className="w-full h-full px-4 flex justify-center items-center"
    >
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
