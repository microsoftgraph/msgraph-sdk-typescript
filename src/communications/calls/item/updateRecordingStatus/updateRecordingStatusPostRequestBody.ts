import {RecordingStatus} from '../../../../models/recordingStatus';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UpdateRecordingStatusPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The clientContext property
     */
    clientContext?: string | undefined;
    /**
     * The status property
     */
    status?: RecordingStatus | undefined;
}
