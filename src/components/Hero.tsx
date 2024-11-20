import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="container flex flex-col items-center text-center gap-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Your Vision, Our Expertise</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
          Transform Your Digital Presence with{' '}
          <span className="text-primary">Xyston Studios</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl">
          We're a full-service digital agency crafting beautiful, functional solutions 
          that drive real business results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Button size="lg" className="group">
            Start Your Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            View Our Work
          </Button>
        </div>

        <div className="w-full max-w-5xl mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 border rounded-lg p-8">
          {[
            ['100+', 'Projects Delivered'],
            ['95%', 'Client Satisfaction'],
            ['50+', 'Team Members'],
            ['24/7', 'Support'],
          ].map(([value, label]) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold">{value}</span>
              <span className="text-sm text-muted-foreground text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}