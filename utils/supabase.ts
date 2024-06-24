import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient('https://gwzpmebibriyvqjtlaan.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3enBtZWJpYnJpeXZxanRsYWFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0NzIzNDYsImV4cCI6MjAyNzA0ODM0Nn0.3LXCdJZMckFZqpbYzy4pZmJe82xBNh_neKyimnlea48');