export function formatDateYYYYMMDD(d: Date): string {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  
 export function getCalendarDays(year: number, month: number): (number | null)[] {
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    const firstDayOfWeek = first.getDay();
    const daysInMonth = last.getDate();
    const out: (number | null)[] = [];
    for (let i = 0; i < firstDayOfWeek; i++) out.push(null);
    for (let d = 1; d <= daysInMonth; d++) out.push(d);
    while (out.length < 42) out.push(null);
    return out.slice(0, 42);
  }