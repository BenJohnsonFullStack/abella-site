import { RegistrationForm } from "@/components/elements";

const SignUp = () => {
  return (
    <>
      <section id="sign-up">
        <h2>Register</h2>
        <div className="card-container">
          <RegistrationForm />
        </div>
      </section>
    </>
  );
};

export default SignUp;
