import {Tone} from './tone';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ToneInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * An incremental identifier used for ordering DTMF events.
     */
    sequenceId?: number | undefined;
    /**
     * The tone property
     */
    tone?: Tone | undefined;
}
