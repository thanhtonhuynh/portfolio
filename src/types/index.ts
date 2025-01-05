export type Skill = {
  title: string;
  icon: React.ReactNode;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  siteUrl?: string;
  repoUrl?: string;
};

export type Social = {
  type: string;
  title: string;
  icon: React.ReactNode;
  url: string;
};
