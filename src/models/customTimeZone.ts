import {DaylightTimeZoneOffset} from './daylightTimeZoneOffset';
import {StandardTimeZoneOffset} from './standardTimeZoneOffset';
import {TimeZoneBase} from './timeZoneBase';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CustomTimeZone extends Partial<AdditionalDataHolder>, Partial<Parsable>, TimeZoneBase {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The time offset of the time zone from Coordinated Universal Time (UTC). This value is in minutes. Time zones that are ahead of UTC have a positive offset; time zones that are behind UTC have a negative offset. */
    bias?: number | undefined;
    /** Specifies when the time zone switches from standard time to daylight saving time. */
    daylightOffset?: DaylightTimeZoneOffset | undefined;
    /** Specifies when the time zone switches from daylight saving time to standard time. */
    standardOffset?: StandardTimeZoneOffset | undefined;
}
