import {StandardTimeZoneOffset} from './standardTimeZoneOffset';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DaylightTimeZoneOffset extends Partial<AdditionalDataHolder>, Partial<Parsable>, StandardTimeZoneOffset {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The time offset from Coordinated Universal Time (UTC) for daylight saving time. This value is in minutes. */
    daylightBias?: number | undefined;
}
