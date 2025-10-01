

"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import logo from "../../../public/assets/logo.png";
import Loader from "../Common/Loader";
import Link from "next/link";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const { data: session, status } = useSession();

  const handleConfirmSignOut = async () => {
    setLoading(true);
    try {
      await signOut();
    } catch (err) {
      console.error("Error during sign out:", err);
      setLoading(false);
    }
  };

  const userName = session?.user?.name || session?.user?.email || "User";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-4 bg-white shadow-md z-50">
        {/* Logo + App Name */}
        <Link href='/' className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <span className="text-xl font-semibold text-black hidden md:block">EightDays TravelApp</span>
        </Link>

        {/* Right Section: User Info + Sign Out */}
        <div className="flex items-center space-x-4">
          {status === "authenticated" ? (
            <div className="text-right text-sm">
              <div className="font-semibold text-black truncate max-w-[120px]">{userName}</div>
              <div className="text-gray-500 text-xs truncate max-w-[150px] md:max-w-[200px]">{session.user?.email}</div>
            </div>
          ) : (
            <div className="text-sm text-gray-500 italic">Not signed in</div>
          )}

          <button
            onClick={() => setShowModal(true)}
            className="bg-red-600 text-white px-2 py-1 md:px-4 md:py-2 rounded hover:bg-red-700 transition"
          >
            Sign out
          </button>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full text-center">
            <h2 className="text-lg text-black font-semibold mb-4">
              {loading ? "Signing out..." : "Are you sure you want to sign out?"}
            </h2>

            <div className="flex justify-center gap-4">
              {!loading ? (
                <>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmSignOut}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                  >
                    Yes, Sign out
                  </button>
                </>
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
