import type {StandardTimeZoneOffset} from './standardTimeZoneOffset';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface DaylightTimeZoneOffset extends Parsable, StandardTimeZoneOffset {
    /**
     * The time offset from Coordinated Universal Time (UTC) for daylight saving time. This value is in minutes.
     */
    daylightBias?: number | undefined;
}
