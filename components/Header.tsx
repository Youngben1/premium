import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
            <Link href="/">
                <img className="object-contain w-40 cursor-pointer" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY9Wr3a0GJCcZ5ekYlD_XOa_woQFOK1Q5hXg&usqp=CAU" alt="logo"></img>
            </Link>
            <div className="hidden md:inline-flex items-center space-x-5 ">
            <h3>About</h3>
            <h3>Contact</h3>
            <h3 className="text-white bg-green-700 px-4 rounded-full py-1 cursor-pointer">Follow</h3>
            </div>
        </div>
        <div className="flex items-center space-x-5 text-green-600">
            <h3>Sign In</h3>
            <h3 className="border px-4 py-1 rounded-full cursor-pointer border-green-600">Get Started</h3>
        </div>
    </header>
  )
}

export default Header