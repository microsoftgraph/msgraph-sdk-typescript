import {MeetingInfo} from './meetingInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingInfo(writer: SerializationWriter, meetingInfo: MeetingInfo | undefined = {} as MeetingInfo) : void {
        writer.writeStringValue("@odata.type", meetingInfo.odataType);
        writer.writeAdditionalData(meetingInfo.additionalData);
}
