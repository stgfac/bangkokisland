import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <div className="container max-w-6xl flex items-center justify-between">
          <a className="flex items-center justify-center" href="#">
            <span className="sr-only">Bangkok Island</span>
            
            <span className="ml-2 text-2xl font-bold">Bangkok Island</span>
          </a>
          <nav className="flex gap-4 sm:gap-6">
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#menu">
              Menu
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#about">
              About
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white bg-black bg-opacity-50 p-2 rounded">
                  Welcome to Bangkok Island
                </h1>
                <p className="mx-auto max-w-[700px] text-white text-xl md:text-2xl bg-black bg-opacity-50 p-2 rounded">
                  Experience the authentic flavors of Thailand in the heart of the city
                </p>
              </div>
              <div className="space-x-4">
                <Button>View Menu</Button>
                <Button variant="outline">Make a Reservation</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="menu" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Menu Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Pad Thai", description: "Classic stir-fried rice noodles with shrimp", price: "$14.99" },
                { name: "Green Curry", description: "Spicy coconut curry with vegetables", price: "$13.99" },
                { name: "Mango Sticky Rice", description: "Sweet sticky rice with fresh mango", price: "$7.99" },
                { name: "Tom Yum Soup", description: "Hot and sour soup with lemongrass", price: "$11.99" },
                { name: "Papaya Salad", description: "Spicy green papaya salad with peanuts", price: "$9.99" },
                { name: "Pineapple Fried Rice", description: "Fried rice served in a pineapple", price: "$15.99" },
              ].map((item) => (
                <div key={item.name} className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md">
                  <img
                    src={`/placeholder.svg?height=100&width=100&text=${item.name}`}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-full mb-4"
                  />
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                  <p className="text-lg font-bold mt-2">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-12">
              <img
                alt="Bangkok Island Restaurant"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:w-1/2"
                height="310"
                src="/placeholder.svg?height=310&width=550"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left lg:w-1/2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Bangkok Island</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Bangkok Island brings the vibrant flavors and warm hospitality of Thailand to your neighborhood. Our
                  chefs use authentic recipes and fresh, locally-sourced ingredients to create dishes that transport you
                  to the bustling streets of Bangkok.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Contact Us</h2>
            <div className="grid gap-6 items-center lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <MapPin className="text-gray-500" />
                  <span>123 Thai Street, Cityville, State 12345</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Phone className="text-gray-500" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Mail className="text-gray-500" />
                  <span>info@bangkokisland.com</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-center lg:text-left">Send us a message</h3>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Email" type="email" />
                  <Input placeholder="Subject" />
                  <textarea
                    className="w-full h-24 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    placeholder="Your Message"
                  ></textarea>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="map" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Find Us</h2>
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5707320765985!2d100.56324715!3d13.7455676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ0JzQ0LjAiTiAxMDDCsDMzJzQ3LjciRQ!5e0!3m2!1sen!2sus!4v1629788120792!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Bangkok Island Restaurant Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 border-t">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-500">© 2023 Bangkok Island. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6">
              <a className="text-xs hover:underline underline-offset-4" href="#">
                Terms of Service
              </a>
              <a className="text-xs hover:underline underline-offset-4" href="#">
                Privacy
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-600">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}