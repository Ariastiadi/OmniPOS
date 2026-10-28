// Pre-connected to the Omni POS Supabase project, so the app opens straight to sign-in.
// Both values are PUBLIC by design (the anon key is safe in a browser; Row Level Security protects the data).
// NEVER put the service_role key here. Clear both values to ask for them on first launch instead.
export default {
  url: 'https://lspyvwpbgjaaopczlhpx.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzcHl2d3BiZ2phYW9wY3psaHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxODIwMDksImV4cCI6MjEwODc1ODAwOX0.SusCRAWt7cqE2H-oIH0W0Y7C3l3FgjIgmIQBNPhk67c',
};
