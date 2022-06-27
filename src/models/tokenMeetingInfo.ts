import {MeetingInfo} from './meetingInfo';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface TokenMeetingInfo extends Partial<AdditionalDataHolder>, MeetingInfo, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The token used to join the call. */
    token?: string | undefined;
}
