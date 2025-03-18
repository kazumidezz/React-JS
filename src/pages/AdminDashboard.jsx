import UserManagement from './UserManagement';

export default function AdminDashboard() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Admin Dashboard</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <UserManagement />
      </div>
    </div>
  );
}
