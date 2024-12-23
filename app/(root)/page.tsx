import {auth, signOut} from "@/auth";
import ROUTES from "@/constants/route";
import {Button} from "@/components/ui/button";

const Home = async () => {
    const session = await auth();
    console.log(session);
  return (
      <div>
          <h1 className="text-blue-500 text-center font-inter">Welcome To DevFlow</h1>
          <form
              className="px-10 pt-[100px]"
              action={async () => {
                  "use server";

                  await signOut({redirectTo: ROUTES.SIGN_IN});
              }}
          >
              <Button type="submit">Log out</Button>
          </form>
      </div>
  );
}

export default Home;
