// Pre-connected to the OmniTill Supabase project, so the app opens straight to sign-in.
// Both values are PUBLIC by design (the anon key is safe in a browser; Row Level Security protects the data).
// NEVER put the service_role key here. Clear both values to ask for them on first launch instead.
export default {
  url: 'https://plmanmiblxqoioxsnqqs.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsbWFubWlibHhxb2lveHNucXFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0NzQyMDEsImV4cCI6MjEwNzA1MDIwMX0.2vusp7aLOPRQjtpVdZpqv7sRRwhzUpwKO0HrbeTIWMM',
};
