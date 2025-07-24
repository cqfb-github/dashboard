export default function ModDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Discord Moderation Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Moderation Stats Cards */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Active Reports</h2>
          <p className="text-2xl">24</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Banned Users</h2>
          <p className="text-2xl">5</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Warnings</h2>
          <p className="text-2xl">42</p>
        </div>
      </div>
    </div>
  )
}