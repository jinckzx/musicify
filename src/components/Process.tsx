import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, PenTool, Rocket, Users } from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: 'Discovery',
    description: 'We learn about your business, goals, and requirements.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'Create wireframes and visual designs for your approval.',
  },
  {
    icon: Rocket,
    title: 'Development',
    description: 'Build your solution using modern technologies.',
  },
  {
    icon: CheckCircle2,
    title: 'Delivery',
    description: 'Launch your project and provide ongoing support.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined approach to bringing your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={step.title} className="relative group">
              <CardContent className="pt-6">
                <div className="absolute -top-6 left-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}