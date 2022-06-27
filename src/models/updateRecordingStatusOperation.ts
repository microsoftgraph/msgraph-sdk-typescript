import {CommsOperation} from './commsOperation';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UpdateRecordingStatusOperation extends Partial<AdditionalDataHolder>, CommsOperation, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
