import {CommsOperation} from './commsOperation';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RecordOperation extends Partial<AdditionalDataHolder>, CommsOperation, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The access token required to retrieve the recording. */
    recordingAccessToken?: string | undefined;
    /** The location where the recording is located. */
    recordingLocation?: string | undefined;
}
