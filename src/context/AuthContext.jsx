import { createContext, useContext, useEffect, useState } from "react";
import supabase from '../supabaseClient';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);

      // Check for active session
      const { data: session, error: sessionError } = await supabase.auth.getSession();
      console.log("Session Data:", session);
      if (sessionError) console.error("Session Fetch Error:", sessionError.message);

      if (session?.session?.user) {
        const userId = session.session.user.id;

        // Fetch user role from the 'profiles' table
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", userId)
          .single();

        if (profileError) {
          console.error("Error fetching role:", profileError.message);
          setRole(null);
        } else {
          console.log("User Role:", profile?.role);
          setUser(session.session.user);
          setRole(profile?.role || "user");
        }
      } else {
        console.warn("No active session.");
        setUser(null);
        setRole(null);
      }
      setLoading(false);
    };

    fetchUser();

    // Listen for authentication changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth Event:", event, "Session:", session);
      fetchUser();
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, role, supabase, loading }}>
      {loading ? <p>Checking Authentication...</p> : children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
