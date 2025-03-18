// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mpbugbslwfrmajrbgqol.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wYnVnYnNsd2ZybWFqcmJncW9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0OTY3MjMsImV4cCI6MjA1NzA3MjcyM30.smkra27iJZSFHmUP0DO0RVv2c07IMWIBEyqXK1myFr4'; // ← replace with your actual anon public key

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
