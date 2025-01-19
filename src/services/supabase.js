import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ftzxevtpdiaiqpimlsjm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0enhldnRwZGlhaXFwaW1sc2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwNDQxMDUsImV4cCI6MjAzOTYyMDEwNX0.wNH9MLXPifUKvptJLvUG_u75wAFWfTcc7SliLh188Fc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
