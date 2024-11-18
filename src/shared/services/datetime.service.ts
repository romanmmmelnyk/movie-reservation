import {Injectable} from "@nestjs/common";

@Injectable()
export class DateTimeService {
    transformTime(expression, value: number) {
        switch (expression) {
            case 'hours_to_minutes':
                return value * 60
            case 'hours_to_seconds':
                return value * 60 * 60
            case 'minutes_to_hours':
                return value / 60
            case 'minutes_to_seconds':
                return value * 60
            case 'seconds_to_minutes':
                return value / 60
            case 'seconds_to_hours':
                return value / 60 / 60
        }
    }
    convertSecondsToReadableFormat(seconds: number) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);

        return `${hours}:${minutes}`;
    }
}