import type {MeetingInfo} from './meetingInfo';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingInfo(meetingInfo: MeetingInfo | undefined = {} as MeetingInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { meetingInfo.odataType = n.getStringValue(); },
    }
}
