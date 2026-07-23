// Essential toolchain, grouped into 7 categories.
export const stack = [
  { category: 'Frontend', tools: ['Vue.js', 'Inertia.js', 'Alpine.js', 'Preact.js', 'Astro.js'] },
  { category: 'Backend', tools: ['Laravel (PHP)', 'Node.js', 'Adonis.js'] },
  { category: 'Data', tools: ['PostgreSQL', 'MySQL', 'Redis (cache/queue)'] },
  { category: 'Messaging / IoT', tools: ['MQTT', 'RabbitMQ'] },
  { category: 'Infra', tools: ['Docker', 'Nginx', 'Linux', 'CI/CD (Jenkins)'] },
  {
    category: 'Cloud Infra',
    tools: ['GCP (Cloud Run, Cloud SQL)', 'AWS (ECS)', 'Cloudflare', 'Terraform (IaC)', 'Dalang.io'],
  },
  { category: 'Observability', tools: ['Prometheus', 'Grafana', 'Umami', 'Uptime Kuma'] },
];
