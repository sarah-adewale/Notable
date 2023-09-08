// import supabase
import { createClient } from '@supabase/supabase-js'

// create a connection string
const supabase = createClient (
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_SUPABASE_API_KEY
)

export {supabase }

