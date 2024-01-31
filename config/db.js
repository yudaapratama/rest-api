/* eslint-disable import/no-extraneous-dependencies */
import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'

dotenv.config()

if ((typeof process.env.SUPABASE_URL === 'undefined' && typeof process.env.SUPABASE_SERVICE_ROLE === 'undefined') || (process.env.SUPABASE_URL === '' && process.env.SUPABASE_SERVICE_ROLE === '')) {
  console.error('Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE in the .env file')
  process.exit(1)
}

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

export default supabase
