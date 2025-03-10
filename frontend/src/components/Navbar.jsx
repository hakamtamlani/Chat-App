import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquareMore, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquareMore className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-lg font-bold">Chat App</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2  ">
            {/* <Link
              to={"/settings"}
              className={`
              btn btn-sm gap-2 transition-colors
              
              `}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link> */}

            {authUser && (
              <>
                <div className="flex py-2">
                  <Link
                    to={"/profile"}
                    className={`flex gap-2 px-2 py-1 border border-blue-200 rounded-md hover:bg-blue-600 hover:text-white`}
                  >
                    <User className="size-5" />
                    <span className="hidden sm:inline">Profile</span>
                  </Link>
                </div>
                <button
                  className="flex gap-2 items-center bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded-md text-white"
                  onClick={logout}
                >
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline ">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
