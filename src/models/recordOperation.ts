import {CommsOperation} from './commsOperation';

export interface RecordOperation extends CommsOperation{
    /** The access token required to retrieve the recording. */
    recordingAccessToken?:string | undefined;
    /** The location where the recording is located. */
    recordingLocation?:string | undefined;
}
