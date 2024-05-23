import RegisterForm from "./components/RegisterForm";
import Tree from "./components/Tree";

const backgroundStyles = {
  background: "url('/form-bg.svg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const RegisterPage = () => {
  return (
    <div
      style={backgroundStyles}
      className="w-full h-full px-4 flex justify-center items-center gap-10"
    >
      <RegisterForm />
      <div className="hidden lg:block w-1/3 h-full">
        <Tree />
      </div>
    </div>
  );
};

export default RegisterPage;
