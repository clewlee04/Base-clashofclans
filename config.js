const SUPABASE_URL = "https://pjvlxkjtguuqqykacopx.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_4eZBQoXtUL8fUkYcLCXpCQ_5shBhtLB";

if (!window.supabase) {
  console.error("Supabase JS belum dimuat.");
} else {
  window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );
}
