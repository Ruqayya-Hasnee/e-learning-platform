import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-blue-900">About Our Platform</h1>
        <p className="text-gray-600 mt-4">
          Welcome to our modern e-learning platform, where instructors can
          upload courses, and students can enroll and learn at their own pace.
          Our goal is to make quality education accessible to everyone.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Key Features</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-semibold">📚 For Instructors</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Upload and manage courses easily.</li>
              <li>Track student progress and performance.</li>
              <li>Create interactive quizzes & assignments.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">🎓 For Students</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Enroll in high-quality courses.</li>
              <li>Access video lectures, notes, and quizzes.</li>
              <li>Earn certificates upon course completion.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-6">How It Works</h2>
        <ol className="list-decimal pl-6 text-gray-600 mt-4">
          <li>Sign up as an instructor or student.</li>
          <li>Browse available courses or create one.</li>
          <li>Learn at your own pace with high-quality content.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6">
          Testimonials & Success Stories
        </h2>
        <p className="text-gray-600 mt-4">
          Hear from our students and instructors about how this platform has
          helped them achieve their learning goals and share their knowledge
          with the world.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Get Started Today!</h2>
        <p className="text-gray-600 mt-4">
          Join our platform and start your learning journey. Whether you are an
          instructor or a student, we have something valuable for you!
        </p>

        <Link href="/courses">
          <button className="mt-6 primary">Explore Courses</button>
        </Link>
      </div>
    </div>
  );
}
