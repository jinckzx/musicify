import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Contact us for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Reach out to us through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <a 
                href="mailto:anmolsehgal917@gmail.com" 
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span>anmolsehgal917@gmail.com</span>
              </a>
              <a 
                href="tel:+918830538965" 
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 8830538965</span>
              </a>
              <a 
                href="https://github.com/jinckzx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5 text-primary" />
                <span>github.com/jinckzx</span>
              </a>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you soon.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" action="mailto:anmolsehgal917@gmail.com" method="post" encType="text/plain">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Name" name="name" required />
                  <Input placeholder="Email" type="email" name="email" required />
                </div>
                <Input placeholder="Subject" name="subject" required />
                <Textarea placeholder="Your message" name="message" className="min-h-[120px]" required />
                <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}