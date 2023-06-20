import {MeetingInfo} from './meetingInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingInfo(meetingInfo: MeetingInfo | undefined = {} as MeetingInfo, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", meetingInfo.odataType);
        writer.writeAdditionalData(meetingInfo.additionalData);
}
