import { Button } from "@/components/ui/button"
import { signIn, signOut, auth } from "@/auth"

const LoginPage = async () => {
    const session = await auth()

    return (
        <div className="flex h-dvh w-full p-4 gap-4">

            <div className="flex flex-col h-full w-full gap-4 lg:w-1/2 items-center justify-center  rounded-lg">
                {
                    !session && (
                        <form
                            action={async () => {
                                "use server";
                                await signIn("google", { redirectTo: "/investments" });
                            }}
                        >
                            <Button className="gap-2 font-semibold m-4 w-fit cursor-pointer" variant="secondary">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="display:block" width="20" height="20">
                                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                    <path fill="none" d="M0 0h48v48H0z"></path>
                                </svg>
                                <span className="text-xs sm:text-md">Sign in with Google</span>
                            </Button>
                        </form>
                    )
                }
                {
                    session && (
                        <form
                            action={async () => {
                                "use server";
                                await signOut();
                            }}
                        >
                            <Button className="gap-2 font-semibold m-4 w-fit cursor-pointer" variant="secondary">
                                Sign out
                            </Button>
                        </form>)
                }

            </div>

            <div className="hidden lg:flex flex-col h-full w-1/2 items-center justify-center bg-muted rounded-lg">

            </div>

        </div>
    )
}

export default LoginPage