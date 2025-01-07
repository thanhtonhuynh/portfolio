import productManagement from "@/assets/techbuy/product-management.png";
import productSearch from "@/assets/techbuy/product-search.png";
import shoppingCart from "@/assets/techbuy/shopping-cart.png";
import stripePayment from "@/assets/techbuy/stripe-payment.png";
import { projects } from "@/data/projects";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProjectHeader } from "../ProjectHeader";
import { ProjectLinks } from "../ProjectLinks";
import { TechStackItem } from "../TechStackItem";

export const metadata: Metadata = {
  title: "Techbuy | Ton Huynh",
  description: "Full-stack e-commerce storefront and admin dashboard.",
};

export default function Page() {
  const project = projects.find((project) => project.slug === "techbuy");
  if (!project) notFound();

  return (
    <section className="p-4 md:p-16">
      <ProjectHeader project={project} />

      <main className="space-y-16 text-base leading-7">
        {/* Overview */}
        <section>
          <p>
            Techbuy is an ecommerce storefront application that allows users to browse and purchase
            tech products. It also includes an admin dashboard for managing categories, products,
            and orders.
          </p>
          <p>
            It was developed as a personal project to learn and practice building full-stack web
            applications using Next.js and Stripe.
          </p>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold">Tech stack</h2>

          <ul className="space-y-3">
            <TechStackItem label="Next.js" href="https://nextjs.org/">
              React framework
            </TechStackItem>

            <TechStackItem label="Prisma" href="https://www.prisma.io/orm">
              Node.js and TypeScript ORM
            </TechStackItem>

            <TechStackItem label="MongoDB" href="https://www.mongodb.com/">
              Database
            </TechStackItem>

            <TechStackItem label="Tailwindcss" href="https://tailwindcss.com/">
              Styling
            </TechStackItem>

            <TechStackItem label="Shadcn/ui" href="https://ui.shadcn.com/">
              UI components
            </TechStackItem>

            <TechStackItem label="Amazon S3" href="https://aws.amazon.com/s3/">
              Image storage
            </TechStackItem>

            <TechStackItem label="Stripe" href="https://stripe.com/">
              Payment processing
            </TechStackItem>

            <TechStackItem label="Vercel" href="https://vercel.com/">
              Hosting
            </TechStackItem>
          </ul>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold">Features</h2>

          <ul className="space-y-16">
            <li className="grid items-center justify-items-center gap-4 md:grid-cols-2">
              <div className="max-w-xs">
                <Image
                  src={shoppingCart}
                  alt="Shopping cart feature example"
                  width={450}
                  height={530}
                  className="w-full rounded-xl border object-contain"
                />
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Optimistically UI updated shopping cart</h3>
                <p>
                  The shopping cart is stored in database and optimistically updated in the UI using
                  React context API and the useOptimistic hook to provide a seamless user
                  experience.
                </p>
              </div>
            </li>

            <li className="grid items-center justify-items-center gap-4 md:grid-cols-2">
              <div className="order-last md:order-first">
                <h3 className="mb-2 font-semibold">
                  Stripe payment processing with webhook integration
                </h3>
                <p>
                  Payments are processed using Stripe and the application is notified of successful
                  payments via a webhook. The webhook is secured using a secret key and verified
                  using the Stripe SDK.
                </p>
              </div>

              <div className="max-w-xl">
                <Image
                  src={stripePayment}
                  alt="Stripe payment example"
                  width={580}
                  height={300}
                  className="w-full rounded-xl border object-contain"
                />
              </div>
            </li>

            <li className="grid items-center justify-items-center gap-4 md:grid-cols-2">
              <div className="max-w-lg">
                <Image
                  src={productSearch}
                  alt="Product search feature example"
                  width={512}
                  height={330}
                  className="w-full rounded-xl border object-contain"
                />
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Product search and sorting</h3>
                <p>
                  Users can search for products by name and sort products by price, latest products,
                  most popular, or most relevant.
                </p>
              </div>
            </li>

            <li className="grid items-center justify-items-center gap-4 md:grid-cols-2">
              <div className="order-last md:order-first">
                <h3 className="mb-2 font-semibold">
                  Product management
                  <span className="text-muted-foreground"> - Admin Feature</span>
                </h3>
                <p>
                  Admin users can easily manage products via an intuitive admin dashboard. They can
                  add, edit, change status, and delete products. The interface also includes
                  functionalities such as search, sorting, and filtering.
                </p>
              </div>

              <div className="max-w-2xl">
                <Image
                  src={productManagement}
                  alt="Product management feature example"
                  width={672}
                  height={330}
                  className="w-full rounded-xl border object-contain"
                />
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <h3 className="mb-2 font-semibold">Other features</h3>

            <ul className="space-y-3">
              <li>
                Order management - admin users can view and manage orders, such as viewing customer
                information, order details, and shipping information, and changing order status.
              </li>
              <li>
                Category management - admin users can manage categories, such as adding, editing,
                and deleting categories.
              </li>
              <li>
                Session-based authentication and authorization - login, signup using email and
                password, and reset password by email.
              </li>
              <li>
                Role-based access control - admin users have access to admin features, while regular
                users can only browse and purchase products.
              </li>
              <li>Rate limiting using sliding window algorithm.</li>
            </ul>
          </div>
        </section>

        {/* <section>
          <h2 className="mb-8 text-2xl font-bold">Challenges and what I learned</h2>

          <ul className="space-y-3">
            <li></li>
          </ul>
        </section> */}

        <section>
          <h2 className="mb-8 text-2xl font-bold">Future improvements</h2>

          <ul className="space-y-3">
            <li>Personalized product recommendations based on purchase history and preferences.</li>
            <li>Product reviews and ratings.</li>
            <li>Product comparison feature.</li>
            <li>
              Integration with shipping carriers for real-time shipping rates and tracking
              information.
            </li>
          </ul>
        </section>
      </main>

      <footer className="mt-8">
        <div className="flex justify-center gap-16">
          <ProjectLinks project={project} />
        </div>
      </footer>
    </section>
  );
}
