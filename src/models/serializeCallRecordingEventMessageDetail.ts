import { type CallRecordingEventMessageDetail } from './callRecordingEventMessageDetail';
import { CallRecordingStatus } from './callRecordingStatus';
import { type IdentitySet } from './identitySet';
import { serializeEventMessageDetail } from './serializeEventMessageDetail';
import { serializeIdentitySet } from './serializeIdentitySet';
import { Duration, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCallRecordingEventMessageDetail(writer: SerializationWriter, callRecordingEventMessageDetail: CallRecordingEventMessageDetail | undefined = {} as CallRecordingEventMessageDetail) : void {
        serializeEventMessageDetail(writer, callRecordingEventMessageDetail)
        writer.writeStringValue("callId", callRecordingEventMessageDetail.callId);
        writer.writeStringValue("callRecordingDisplayName", callRecordingEventMessageDetail.callRecordingDisplayName);
        writer.writeDurationValue("callRecordingDuration", callRecordingEventMessageDetail.callRecordingDuration);
        writer.writeEnumValue<CallRecordingStatus>("callRecordingStatus", callRecordingEventMessageDetail.callRecordingStatus);
        writer.writeStringValue("callRecordingUrl", callRecordingEventMessageDetail.callRecordingUrl);
        writer.writeObjectValue<IdentitySet>("initiator", callRecordingEventMessageDetail.initiator, serializeIdentitySet);
        writer.writeObjectValue<IdentitySet>("meetingOrganizer", callRecordingEventMessageDetail.meetingOrganizer, serializeIdentitySet);
}
