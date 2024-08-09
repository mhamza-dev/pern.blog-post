export const formatDate = (date: Date): string => {
    const newDate = typeof date === 'string' ? new Date(date) : date
  return newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
