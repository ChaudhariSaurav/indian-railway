import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDataStore from "../zustand/userDataStore";
import { GoogleLogin } from "../service/auth";
function Login() {
    const navigate = useNavigate();
    const setUser = useDataStore((state) => state.setUser);

    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false);
    const handleGoogleLogin = useCallback(() => {
        setIsLoading(true);
        GoogleLogin()
            .then((user) => {
                setUser(user);
                navigate("/home");
            })
            .catch((err) => {
                console.error("Error in Google Login", err);
            });
    }, [navigate, setUser]);

    // Apple credential
    useEffect(() => {
        document.body.classList.add("no-scroll");

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, []);

    return (
        <>
            <section className="w-full h-screen ">
                <div className="flex min-h-screen">
                    {/* Container */}
                    <div className="flex flex-row w-full">
                        {/* Sidebar */}
                        <div className="hidden lg:flex flex-col justify-between bg-[#ffe85c] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
                            <div className="flex items-center justify-start space-x-3">
                                {/* <span className="bg-black rounded-full w-8 h-8" /> */}
                                {/* <p className="text-xl font-bold">Train site</p> */}
                            </div>
                            <div className="space-y-5">
                                <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
                                    Check train status through any modern day Internet-powered devices
                                </h1>
                            </div>
                            <p className="font-medium">Saurav chaudhary</p>
                        </div>
                        {/* Login */}
                        <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
                            <div className="flex lg:hidden justify-between items-center w-full py-4">
                                <div className="flex items-center justify-start space-x-3">
                                    {/* <span className="bg-black rounded-full w-6 h-6" /> */}
                                    {/* <p className="text-xl font-bold">Train site</p> */}
                                </div>
                            </div>
                            {/* Login box */}
                            <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
                                <div className="flex flex-col space-y-2 text-center">
                                    <h2 className="text-3xl md:text-4xl font-bold mt-5">
                                        Sign in to account
                                    </h2>
                                    <p className="text-md md:text-xl">
                                        Sign in with your regular account & social media account
                                    </p>
                                </div>
                                <div className="flex flex-col max-w-md space-y-5">



                                    <div className="flex justify-center items-center">
                                        <span className="w-full border border-black" />
                                        <span className="px-4">Or</span>
                                        <span className="w-full border border-black" />
                                    </div>
                                    <button
                                        onClick={handleGoogleLogin}
                                        className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-xl font-medium border-black relative"
                                    >
                                        <span className="absolute left-4">
                                            <img
                                                className="w-6 h-6"
                                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                                alt="google logo"
                                            />
                                        </span>
                                        <span>Sign in with Google</span>
                                    </button>
                                </div>
                            </div>
                            {/* Footer */}
                            <div className="flex justify-center flex-col m-auto mb-16 text-center text-lg dark:text-slate-700 ">
                                <p>For Any inquiries, please contact Saurav Chaudhary</p>
                                <div className="flex items-center justify-center space-x-2 mt-4 flex-wrap"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;