export function formatDate(dateString: Date) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  const ordinal = (n: number) =>
    ["th", "st", "nd", "rd"][
      (n % 100 > 10 && n % 100 < 20) || n % 10 > 3 ? 0 : n % 10
    ];

  return `${day}${ordinal(day)} ${month} ${year}`;
}
