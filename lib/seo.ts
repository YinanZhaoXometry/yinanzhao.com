export const seo = {
  title: 'Yinan Zhao | Freelancer, Developer',
  description: "Hi, I'm Yinan Zhao, a Freelancer and Developer",
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://yinanzhao.com'
      : 'http://localhost:3000'
  ),
} as const
