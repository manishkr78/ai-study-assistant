import { useState, useEffect } from 'react';

// Dummy Firebase auth hook setup
export function useAuth() {
  const [user, setUser] = useState<{ uid: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check
    const checkAuth = async () => {
      setTimeout(() => {
        // Uncomment to simulate logged in state
        // setUser({ uid: '123', email: 'student@example.com' });
        setLoading(false);
      }, 500);
    };

    checkAuth();
  }, []);

  return { user, loading };
}
