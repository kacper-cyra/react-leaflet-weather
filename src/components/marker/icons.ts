export const ICONS = [
  "broken_clouds",
  "clear_sky",
  "few_clouds",
  "light_rain",
  "mist",
  "moderate_rain",
  "overcast_clouds",
  "rain",
  "scattered_clouds",
  "shower_rain",
  "snow",
];

export function mapIdToIcon(id: number): string {
  switch (true) {
    case id < 300:
      return "thunderstorm";
    case id < 400:
      return "light_rain";
    case id < 600:
      return "rain";
    case id < 700:
      return "snow";
    default:
      return "";
  }
}
