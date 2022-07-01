import {Tone} from './tone';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ToneInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** An incremental identifier used for ordering DTMF events. */
    sequenceId?: number | undefined;
    /** Possible values are: tone0, tone1, tone2, tone3, tone4, tone5, tone6, tone7, tone8, tone9, star, pound, a, b, c, d, flash. */
    tone?: Tone | undefined;
}
