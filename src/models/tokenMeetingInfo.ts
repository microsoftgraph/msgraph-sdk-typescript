import {MeetingInfo} from './meetingInfo';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TokenMeetingInfo extends MeetingInfo, Parsable {
    /**
     * The token used to join the call.
     */
    token?: string | undefined;
}
