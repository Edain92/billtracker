DO $$ 
BEGIN
   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'billtracker') THEN
      CREATE DATABASE billtracker;
   END IF;
END $$;

\c billtracker