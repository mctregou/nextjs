import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudRain,
  CloudRainWind,
  CloudSun,
  Snowflake,
  SunMedium,
  SunSnow,
  Zap,
} from 'lucide-react';

export default function WeatherIcon({ code }: { code: number }) {
  const defaultClassName = 'm-auto';
  switch (code) {
    case 0:
      return <SunMedium className={defaultClassName} />;
    case 1:
    case 2:
    case 3:
      return <CloudSun className={defaultClassName} />;
    case 45:
    case 48:
      return <CloudFog className={defaultClassName} />;
    case 51:
    case 53:
    case 55:
      return <CloudDrizzle className={defaultClassName} />;
    case 56:
    case 57:
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return <CloudRain className={defaultClassName} />;
    case 71:
    case 73:
    case 75:
      return <SunSnow className={defaultClassName} />;
    case 77:
      return <Snowflake className={defaultClassName} />;
    case 80:
    case 81:
    case 82:
      return <CloudRainWind className={defaultClassName} />;
    case 85:
    case 86:
      return <SunSnow className={defaultClassName} />;
    case 95:
    case 96:
    case 99:
      return <Zap className={`${defaultClassName} text-green`} />;
    default:
      return <Cloud className={defaultClassName} />;
  }
}
