import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mpbugbslwfrmajrbgqol.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wYnVnYnNsd2ZybWFqcmJncW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0OTY3MjMsImV4cCI6MjA1NzA3MjcyM30.smkra27iJZSFHmUP0DO0RVv2c07IMWIBEyqXK1myFr4'; 
const supabase = createClient(supabaseUrl, supabaseKey);



export default function UserManagement() {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [editingUserId, setEditingUserId] = useState(null);
    const [newAge, setNewAge] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        const { data, error } = await supabase.from('users').select('*');
        if (error) {
            console.error('❌ Error fetching users:', error);
        } else {
            setUsers(data);
        }
    }

    async function addUser(e) {
        e.preventDefault();
        if (!email || !age) {
            alert('⚠️ Please fill in all fields');
            return;
        }

        const { data, error } = await supabase.from('users').insert([{ email, age: parseInt(age) }]).select('*');

        if (error) {
            console.error('❌ Error adding user:', error);
            alert('Failed to add user: ' + error.message);
        } else {
            setUsers([...users, ...data]);
            setEmail('');
            setAge('');
        }
    }

    async function deleteUser(userId) {
        const { error } = await supabase.from('users').delete().eq('id', userId);
        if (error) {
            alert('Failed to delete user: ' + error.message);
        } else {
            setUsers(users.filter(user => user.id !== userId));
        }
    }

    async function updateAge(userId) {
        if (!newAge) return alert('⚠️ Please enter a new age');
        
        const { data, error } = await supabase.from('users').update({ age: parseInt(newAge) }).eq('id', userId).select('*');
        if (error) {
            alert('Failed to update age: ' + error.message);
        } else {
            setUsers(users.map(user => (user.id === userId ? { ...user, age: parseInt(newAge) } : user)));
            setEditingUserId(null);
            setNewAge('');
        }
    }

    return (
        <div className="p-6 max-w-2xl mx-auto bg-gradient-to-r from-orange-500 to-pink-600 rounded-xl shadow-xl text-white">
            <h1 className="text-3xl font-bold mb-4 text-center">User Management</h1>

            <form onSubmit={addUser} className="mb-4 flex flex-col gap-3">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border rounded-lg text-black"/>
                <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}
                    className="w-full p-3 border rounded-lg text-black"/>
                <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 rounded-lg transition-all">
                    ➕ Add User
                </button>
            </form>

            <h2 className="text-xl font-bold mb-2 text-center">Users List</h2>
            <ul className="space-y-3">
                {users.map((user) => (
                    <li key={user.id} className="bg-white text-black p-4 rounded-lg shadow-lg flex justify-between items-center">
                        <span className="font-medium">{user.email} - {user.age} years old</span>
                        <div className="flex gap-2">
                            {editingUserId === user.id ? (
                                <>
                                    <input type="number" placeholder="New Age" value={newAge} onChange={(e) => setNewAge(e.target.value)}
                                        className="p-1 border rounded w-20 text-black"/>
                                    <button onClick={() => updateAge(user.id)} className="bg-green-500 hover:bg-green-400 text-white px-3 py-1 rounded-lg transition-all">
                                        ✅ Save
                                    </button>
                                    <button onClick={() => setEditingUserId(null)} className="bg-gray-500 hover:bg-gray-400 text-white px-3 py-1 rounded-lg transition-all">
                                        ❌ Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => setEditingUserId(user.id)} className="bg-green-500 hover:bg-blue-400 text-white px-3 py-1 rounded-lg transition-all">
                                        ✏️ Edit
                                    </button>
                                    <button onClick={() => deleteUser(user.id)} className="bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded-lg transition-all">
                                        🗑️ Delete
                                    </button>
                                </>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
