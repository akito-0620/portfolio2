export const asset = (src: string) =>
  `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`
