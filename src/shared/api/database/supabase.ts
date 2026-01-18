import { createClient } from '@supabase/supabase-js';
import { Database } from './type';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('NEXT_PUBLIC_SUPABASE_PROJECT_URL and NEXT_PUBLIC_SUPABASE_KEY must be set');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
