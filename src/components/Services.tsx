import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Globe, Megaphone, LineChart, Code } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Design',
    description: 'Beautiful, intuitive designs that engage users and reflect your brand identity.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns that drive traffic and convert visitors.',
  },
  {
    icon: LineChart,
    title: 'SEO Optimization',
    description: 'Improve your search rankings and increase organic traffic.',
  },
  {
    icon: Code,
    title: 'Custom Solutions',
    description: 'Tailored software solutions to streamline your business processes.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}