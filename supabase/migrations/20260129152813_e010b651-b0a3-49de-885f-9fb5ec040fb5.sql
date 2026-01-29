-- Create a table for summit prompts (Best Prompt Competition)
CREATE TABLE public.summit_prompts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  prompt_text TEXT NOT NULL,
  author_name TEXT NOT NULL,
  brand_context TEXT,
  day_number INTEGER DEFAULT 1
);

-- Enable Row Level Security
ALTER TABLE public.summit_prompts ENABLE ROW LEVEL SECURITY;

-- Anyone can read prompts
CREATE POLICY "Anyone can read prompts"
ON public.summit_prompts
FOR SELECT
USING (true);

-- Anyone can submit prompts
CREATE POLICY "Anyone can submit prompts"
ON public.summit_prompts
FOR INSERT
WITH CHECK (true);

-- Enable realtime for prompts
ALTER PUBLICATION supabase_realtime ADD TABLE public.summit_prompts;