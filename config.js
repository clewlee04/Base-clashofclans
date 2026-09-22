// Isi dari Supabase Dashboard > Project Settings > API.
// Gunakan Publishable key, BUKAN service_role/secret key.
const SUPABASE_URL = "PASTE_SUPABASE_PROJECT_URL";
const SUPABASE_PUBLISHABLE_KEY = "PASTE_SUPABASE_PUBLISHABLE_KEY";
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
