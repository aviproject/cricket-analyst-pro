This repository is a monorepo for Cricket Analyst Pro.

Services:

frontend → Next.js dashboard  
backend → NestJS API  
ml-service → Python FastAPI ML engine  
database → Supabase PostgreSQL

Communication:

Frontend → Backend → ML service

Backend handles all database queries.
ML service performs prediction and simulation.
