-- Create table for user thoughts/quotes
CREATE TABLE public.summit_thoughts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  content TEXT NOT NULL,
  author_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.summit_thoughts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read thoughts (public feed)
CREATE POLICY "Anyone can read thoughts"
ON public.summit_thoughts
FOR SELECT
USING (true);

-- Allow anyone to insert thoughts (public submissions)
CREATE POLICY "Anyone can submit thoughts"
ON public.summit_thoughts
FOR INSERT
WITH CHECK (true);

-- Enable realtime for live updates
ALTER PUBLICATION supabase_realtime ADD TABLE public.summit_thoughts;