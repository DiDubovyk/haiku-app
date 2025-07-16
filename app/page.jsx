import RegisterForm from "../components/RegisterForm";
import { getUserFromCookie } from "../lib/getUser";
import Dashboard from "../components/Dashboard";

export default async function Page() {
  const user = await getUserFromCookie();
  return (
    <>
      {user && <Dashboard user={user} />}
      {!user && (
        <div className="w-full h-full flex justify-center items-center flex-col">
          <p className="text-center text-2xl text-gray-600 mb-5">
            Don&rsquo;t have an account?
            <strong> Create One </strong>
          </p>
          <RegisterForm />
        </div>
      )}
    </>
  );
}
