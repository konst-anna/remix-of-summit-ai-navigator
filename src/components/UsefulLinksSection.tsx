import { motion } from 'framer-motion';
import { FolderOpen, FileText, ExternalLink, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';

const folders = [
  {
    title: 'Country Posters',
    description: 'Regional marketing posters and visual assets',
    icon: FolderOpen,
    link: '#',
    files: [
      'Italy Prevnar Adult Poster.pdf',
      'Germany PCV Paediatric Poster.pdf',
      'Spain RSV Maternal Poster.pdf',
      'France Comirnaty Campaign Poster.pdf',
    ],
  },
  {
    title: 'Best Cases',
    description: 'Winning case studies and campaign highlights',
    icon: FolderOpen,
    link: '#',
    files: [
      'Brazil Abrysvo Best Case.pdf',
      'Japan Prevnar20 Launch Case.pdf',
      'UK RSV Adult Best Case.pdf',
      'Australia Comirnaty Best Case.pdf',
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function UsefulLinksSection() {
  return (
    <section id="useful-links" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'linear-gradient(135deg, #59c5c7, #0095ff)' }}>
            <ExternalLink className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Resources</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Useful Links
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access shared folders with country posters, best cases, and other summit materials.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {folders.map((folder) => (
            <motion.div key={folder.title} variants={item}>
              <Card className="h-full p-6 bg-card hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                {/* Folder header */}
                <a
                  href={folder.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 mb-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ background: 'linear-gradient(135deg, #59c5c7, #0095ff)' }}
                  >
                    <folder.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      {folder.title}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-muted-foreground">{folder.description}</p>
                  </div>
                </a>

                {/* File list */}
                <div className="space-y-2">
                  {folder.files.map((file) => (
                    <div
                      key={file}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-muted/50 hover:bg-muted transition-colors group cursor-pointer"
                    >
                      <FileText className="w-4 h-4 text-muted-foreground shrink-0" style={{ color: '#e74c3c' }} />
                      <span className="text-sm text-foreground flex-1 truncate">{file}</span>
                      <Download className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
