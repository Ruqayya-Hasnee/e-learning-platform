import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full m-0 p-0">
      <div className="bg-[url('/landing-page.avif')] bg-cover bg-no-repeat min-h-screen overflow-hidden">
        <div className="flex justify-between items-center h-12 mt-32 mx-35">
          <div className="w-lg">
            <h1 className="text-5xl font-bold text-blue-900">E-learning</h1>
            <p className="text-gray-600 mt-4">
              A modern E-learning platform where instructors can upload courses
              & students can enroll.
            </p>
            <Link href="/about">
              <button className="secondary my-6">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
