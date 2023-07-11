import {CallTranscriptionState} from './callTranscriptionState';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CallTranscriptionInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The state modified time in UTC.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The state property
     */
    state?: CallTranscriptionState | undefined;
}
