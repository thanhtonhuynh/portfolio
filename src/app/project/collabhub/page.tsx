import chatFeature from "@/assets/collabhub/chat-feature.png";
import projectTaskManagement from "@/assets/collabhub/project-task-management.png";
import projectTaskManagement2 from "@/assets/collabhub/project-task-management2.png";
import rbacFeature from "@/assets/collabhub/rbac-feature.png";
import { projects } from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProjectHeader } from "../ProjectHeader";
import { ProjectLinks } from "../ProjectLinks";
import { TechStackItem } from "../TechStackItem";

export default function Page() {
  const project = projects.find((project) => project.slug === "collabhub");
  if (!project) notFound();

  return (
    <section className="p-8 md:p-16">
      <ProjectHeader project={project} />

      <main className="space-y-16 text-base leading-7">
        {/* Overview */}
        <section>
          <p>
            CollabHub is a centralized platform for streamlining the process of collaboration and
            project management. It provides tools for team communication, task assignment, and
            progress tracking, all in one place. The platform aims to enhance productivity and
            ensure that all team members are on the same page, making it easier to manage projects
            efficiently and effectively.
          </p>
          <p>
            It was developed as a school project consisting of 4 members, including me, for SFU CMPT
            372 Web II - Server-side Development, Spring 2024.
          </p>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold">Tech stack</h2>

          <ul className="space-y-3">
            <TechStackItem label="React" href="https://react.dev/">
              Frontend framework
            </TechStackItem>

            <TechStackItem label="Express" href="https://expressjs.com/">
              Backend framework
            </TechStackItem>

            <TechStackItem label="PostgreSQL" href="https://www.postgresql.org/">
              Database
            </TechStackItem>

            <TechStackItem label="Sequelize" href="https://sequelize.org/">
              Node.js and TypeScript ORM
            </TechStackItem>

            <TechStackItem label="Socket.io" href="https://socket.io/">
              Real-time communication
            </TechStackItem>

            <TechStackItem label="SCSS" href="https://sass-lang.com/">
              Styling
            </TechStackItem>

            <TechStackItem label="Google Cloud Storage" href="https://firebase.google.com/">
              File storage
            </TechStackItem>

            <TechStackItem label="Google Cloud Platform" href="https://cloud.google.com/">
              Database hosting &#40;Cloud SQL&#41; and deployment &#40;Compute Engine&#41;
            </TechStackItem>
          </ul>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold">Features</h2>

          <ul className="space-y-16">
            <li className="grid items-center gap-24 md:grid-cols-2 md:gap-4">
              <div className="relative">
                <div className="max-w-xl">
                  <Image
                    src={projectTaskManagement}
                    alt="Project task management example"
                    width={450}
                    height={320}
                    className="w-full rounded-xl border object-contain"
                  />
                </div>
                <div className="absolute -bottom-20 right-0 max-w-md">
                  <Image
                    src={projectTaskManagement2}
                    alt="Project task management example 2"
                    width={450}
                    height={300}
                    className="w-full rounded-xl object-contain"
                  />
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Project and task management</h3>
                <p>
                  Users can create projects, add collaborators, tasks, and files. Within each task,
                  users can assign it to team members, set due dates, add descriptions, attachments,
                  and comments.
                </p>
                <p>
                  Tasks are organized into columns: To do, In progress, and Done; and can be moved
                  between those columns via a drag-and-drop interface or a dropdown menu.
                </p>
              </div>
            </li>

            <li className="grid items-center justify-items-center gap-4 md:grid-cols-2">
              <div className="order-last md:order-first">
                <h3 className="mb-2 font-semibold">Role-based access control</h3>
                <p>
                  CollabHub has a role-based access control system that allows the project owner to
                  assign different roles to collaborators, such as Owner, Editor, and Viewer. Each
                  of these roles have different permissions, from full project control to read-only
                  access.
                </p>
              </div>

              <div className="max-w-sm">
                <Image
                  src={rbacFeature}
                  alt="role based access control feature example"
                  width={400}
                  height={400}
                  className="w-full rounded-xl border object-contain"
                />
              </div>
            </li>

            <li className="grid items-center justify-items-center gap-4 md:grid-cols-2">
              <div className="max-w-xs">
                <Image
                  src={chatFeature}
                  alt="Chat feature example"
                  width={320}
                  height={450}
                  className="w-full rounded-xl border object-contain"
                />
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Chat feature</h3>
                <p>
                  Real-time chat feature implemented using Socket.io allows users to communicate
                  with each other within the platform. Users can send direct messages to other users
                  or create group chats.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <h3 className="mb-2 font-semibold">Other features</h3>

            <ul className="space-y-3">
              <li>Admin dashboard for managing users, projects, and roles.</li>
              <li>
                Session-based authentication and authorization - login, signup using email and
                password, and Google login.
              </li>
              <li>
                Account settings for updating personal information, password, and profile picture.
              </li>
              <li>
                Built-in file previewer for viewing images, PDFs, and other file types directly in
                the platform.
              </li>
              <li>
                Search functionality for finding project-related entities, users, and other
                projects.
              </li>
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
            <li>
              Notification system: project updates, task assignments, and mentions in task comments
              and chat messages.
            </li>
            <li>
              Filtering and sorting tasks by due date, assignee, priority, and other criteria.
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
