import monthlyCashflow from "@/assets/ongba/monthly-cashflow.png";
import monthlyEmployeeHoursTipsBreakdown from "@/assets/ongba/monthly-employee-hours-tips-breakdown.png";
import monthlySalesSummary from "@/assets/ongba/monthly-sales-summary.png";
import myShifts from "@/assets/ongba/my-shifts-feature.png";
import rbacFeature from "@/assets/ongba/rbac-feature.png";
import reportGeneration from "@/assets/ongba/report-generation-feature.jpeg";
import { projects } from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProjectHeader } from "../ProjectHeader";
import { ProjectLinks } from "../ProjectLinks";
import { TechStackItem } from "../TechStackItem";

export default function Page() {
  const project = projects.find((project) => project.slug === "ongba-management-system");
  if (!project) notFound();

  return (
    <section className="p-8 md:p-16">
      <ProjectHeader project={project} />

      <main className="space-y-16 text-base leading-7">
        {/* Overview */}
        <section>
          This is a project I developed for a local restaurant &#40;where I had worked at for over 6
          years&#41; to resolve the pain points that we faced. The servers had to manually
          calculating daily sales and writing down sales reports on paper. The owners had to
          manually calculate employee hours and tips, and manually input the sales data into
          spreadsheets. All of which were time-consuming and error-prone tasks. This project aimed
          to automate these tasks, providing a platform for the staff to keep track of their tips,
          and hours, and for the owners to manage the restaurant systematically and more
          efficiently.
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

            <TechStackItem label="Firebase storage" href="https://firebase.google.com/">
              Image storage
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
              <div className="max-w-md">
                <Image
                  src={reportGeneration}
                  alt="Report generation example"
                  width={450}
                  height={530}
                  className="w-full rounded-xl border object-contain"
                />
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Sales report generation</h3>
                <p>
                  Detailed breakdown of daily sales is automatically calculated using the submitted
                  raw sales data, such as total sales, card sales, online sales, and tips.
                  Employees' hours and tips are also calculated and displayed in the report. The
                  report is then generated and stored in the system for future reference.
                </p>
              </div>
            </li>

            <li className="grid items-center justify-items-center gap-4 md:grid-cols-2">
              <div className="order-last md:order-first">
                <h3 className="mb-2 font-semibold">
                  My shifts: Track hours worked and tips earned
                </h3>
                <p>
                  Employees can easily track their shifts, hours worked, and tips earned in one
                  convenient place. They can view their total hours worked, total tips earned
                  bi-weekly for the current month, and review past months' earnings
                </p>
              </div>

              <div className="max-w-xl">
                <Image
                  src={myShifts}
                  alt="My shifts feature example"
                  width={576}
                  height={310}
                  className="w-full rounded-xl border object-contain"
                />
              </div>
            </li>

            <li className="grid items-center justify-items-center gap-4 md:grid-cols-2">
              <div className="max-w-xl">
                <Image
                  src={monthlySalesSummary}
                  alt="Monthly sales summary example"
                  width={550}
                  height={300}
                  className="w-full rounded-xl border object-contain"
                />
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  Monthly sales summary
                  <span className="text-muted-foreground"> - Admin Feature</span>
                </h3>
                <p>
                  Admin can view monthly sales summaries, including total sales, in-store sales, and
                  online sales. This feature provides a quick overview of the restaurant's
                  performance for each month.
                </p>
              </div>
            </li>

            <li className="grid items-center justify-items-center gap-4 md:grid-cols-2">
              <div className="order-last md:order-first">
                <h3 className="mb-2 font-semibold">
                  Monthly employees' hours and tips breakdown
                  <span className="text-muted-foreground"> - Admin Feature</span>
                </h3>
                <p>
                  Admin can view a detailed breakdown of the employees' hours worked and tips earned
                  for each month. This feature provides insights into the employees' performance and
                  helps with payroll management.
                </p>
              </div>

              <div className="max-w-xl">
                <Image
                  src={monthlyEmployeeHoursTipsBreakdown}
                  alt="Monthly employee hours and tips breakdown example"
                  width={576}
                  height={530}
                  className="w-full rounded-xl border object-contain"
                />
              </div>
            </li>

            <li className="grid items-center justify-items-center gap-4 md:grid-cols-2">
              <div className="max-w-xl">
                <Image
                  src={monthlyCashflow}
                  alt="Monthly cashflow table example"
                  width={576}
                  height={300}
                  className="w-full rounded-xl border object-contain"
                />
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  Monthly cashflow
                  <span className="text-muted-foreground"> - Admin Feature</span>
                </h3>
                <p>
                  Submitted sales report data is displayed and summarized in a monthly cashflow
                  table. This feature provides insights into the restaurant's financial performance.
                </p>
              </div>
            </li>

            <li className="grid items-center justify-items-center gap-4 md:grid-cols-2">
              <div className="order-last md:order-first">
                <h3 className="mb-2 font-semibold">Role-based access control</h3>
                <p>
                  Role-based access control (RBAC) is implemented to manage user roles and
                  permissions. Admins have full access to all features, while employees, such as
                  managers, chefs, and servers, have different levels of access based on their
                  roles.
                </p>
                <p>
                  For example, users with chef roles can only view the sales report and their shift
                  records, while servers can also create new sales reports.
                </p>
              </div>

              <div className="max-w-xl">
                <Image
                  src={rbacFeature}
                  alt="Role-based access control feature example"
                  width={576}
                  height={320}
                  className="w-full rounded-xl border object-contain"
                />
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <h3 className="mb-2 font-semibold">Other features</h3>

            <ul className="space-y-3">
              <li>Simple cash calculator app for calculating cash in the till.</li>
              <li>
                Account settings for updating personal information, password, and profile picture.
              </li>
              <li>
                Session-based authentication and authorization - login, signup using email and
                password, and reset password by email.
              </li>
              <li>Rate limiting using sliding window algorithm.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold">Challenges and what I learned</h2>

          <ul className="space-y-3">
            <li>
              After deploying to Vercel, I realized the difference in timezone between the server
              and the client had messed up the date and time of the sales report. For example, when
              a user submits a sales report, the date and time are recorded in the user's local
              timezone, says 21:00 on 2024-12-12 Vancouver time, which is 05:00 on 2024-12-13 UTC
              time. When the data is processed on the server, because the server is in UTC timezone,
              that report is mistakenly treated as being created at 05:00 on 2024-12-13 Vancouver
              time. This causes all data to be incorrectly processed and displayed. I learned to
              handle the timezone difference by converting the date and time to Vancouver timezone
              before processing the data.
            </li>
          </ul>
        </section>

        {/* <section>
          <h2 className="mb-8 text-2xl font-bold">In the pipeline</h2>

          <ul className="space-y-3">
            <li></li>
          </ul>
        </section> */}

        <section>
          <h2 className="mb-8 text-2xl font-bold">Future improvements</h2>

          <ul className="space-y-3">
            <li>
              Staff scheduling: view, create, and manage staff schedules; ability to swap shifts.
            </li>
            <li>Inventory management: track inventory levels and expenses.</li>
            <li>
              Payroll management: calculate employee wages, generate pay stubs, and manage payroll.
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
