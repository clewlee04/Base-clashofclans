// Isi dari Supabase Dashboard > Project Settings > API.
// Gunakan Publishable key, BUKAN service_role/secret key.
const SUPABASE_URL = "https://pjvlxkjtguuqqykacopx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_4eZBQoXtUL8fUkYcLCXpCQ_5shBhtLB";
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
