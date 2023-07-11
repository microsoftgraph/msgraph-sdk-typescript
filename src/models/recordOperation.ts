import {CommsOperation} from './commsOperation';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RecordOperation extends CommsOperation, Parsable {
    /**
     * The access token required to retrieve the recording.
     */
    recordingAccessToken?: string | undefined;
    /**
     * The location where the recording is located.
     */
    recordingLocation?: string | undefined;
}
