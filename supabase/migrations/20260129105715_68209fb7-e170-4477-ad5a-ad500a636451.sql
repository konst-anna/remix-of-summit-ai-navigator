-- Add image_url column to summit_thoughts table
ALTER TABLE public.summit_thoughts
ADD COLUMN image_url TEXT NULL;

-- Create storage bucket for summit photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('summit-photos', 'summit-photos', true);

-- Allow anyone to read photos
CREATE POLICY "Anyone can view photos"
ON storage.objects FOR SELECT
USING (bucket_id = 'summit-photos');

-- Allow anyone to upload photos
CREATE POLICY "Anyone can upload photos"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'summit-photos');