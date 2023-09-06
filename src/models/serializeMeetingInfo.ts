import { type MeetingInfo } from './meetingInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeMeetingInfo(writer: SerializationWriter, meetingInfo: MeetingInfo | undefined = {} as MeetingInfo) : void {
        writer.writeStringValue("@odata.type", meetingInfo.odataType);
        writer.writeAdditionalData(meetingInfo.additionalData);
}
