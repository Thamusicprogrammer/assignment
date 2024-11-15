import { useState } from "react";

function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    nationality: "",
    phoneNumber: "",
    address: "",
    interests: [],
    comments: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${form.name}\nEmail: ${form.email}\nUsername: ${form.userName}\nPassword: ${form.password}\nGender: ${form.gender}\nDate of Birth: ${form.dateOfBirth}\nNationality: ${form.nationality}\nPhone Number: ${form.phoneNumber}\nAddress: ${form.address}\nInterests: ${form.interests} \nComments: ${form.comments}`);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedInterests = checked
        ? [...form.interests, value]
        : form.interests.filter(interest => interest !== value);
      setForm({ ...form, interests: updatedInterests });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 py-12 px-6 sm:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold text-white">User Registration Form</h1>
          <p className="text-lg text-white mt-2">Complete the form to get started</p>
        </div>
        <form className="bg-white rounded-lg shadow-2xl p-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="youremail@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Username</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                type="text"
                name="userName"
                value={form.userName}
                onChange={handleChange}
                placeholder="Choose a unique username"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter a secure password"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Gender</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={form.gender === 'male'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={form.gender === 'female'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Female
                </label>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Date of Birth</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                type="date"
                name="dateOfBirth"
                value={form.dateOfBirth}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Nationality</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                name="nationality"
                value={form.nationality}
                onChange={handleChange}
              >
                <option value="">Select your nationality</option>
                <option value="Nigeria">Nigeria</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                type="tel"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Address</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter your address"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">Interests</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="interests"
                    value="Sports"
                    checked={form.interests.includes('Sports')}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Sports
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="interests"
                    value="Music"
                    checked={form.interests.includes('Music')}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Music
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="interests"
                    value="Technology"
                    checked={form.interests.includes('Technology')}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Technology
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="interests"
                    value="Art"
                    checked={form.interests.includes('Art')}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Art
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200"
              type="submit"
            >
              Register Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
