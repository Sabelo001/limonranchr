export const WHATSAPP = "254711940174";
export const DISPLAY_PHONE = "0711 940 174";
export const CALL_PHONE = "+254711940174";

export const wa = (message: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

export const bookingDraft = (intro: string) =>
  wa(
    `${intro}\n\nArrival date: \nDeparture date: \nNumber of guests (adults / children): \nRoom preference: \nMeal or other requests: \n\nPlease confirm availability, the total price and booking terms.`,
  );

export function localToday() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
