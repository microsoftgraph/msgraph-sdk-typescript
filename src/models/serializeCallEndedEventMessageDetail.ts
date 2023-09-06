import { type CallEndedEventMessageDetail } from './callEndedEventMessageDetail';
import { type CallParticipantInfo } from './callParticipantInfo';
import { type IdentitySet } from './identitySet';
import { serializeCallParticipantInfo } from './serializeCallParticipantInfo';
import { serializeEventMessageDetail } from './serializeEventMessageDetail';
import { serializeIdentitySet } from './serializeIdentitySet';
import { TeamworkCallEventType } from './teamworkCallEventType';
import { Duration, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCallEndedEventMessageDetail(writer: SerializationWriter, callEndedEventMessageDetail: CallEndedEventMessageDetail | undefined = {} as CallEndedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, callEndedEventMessageDetail)
        writer.writeDurationValue("callDuration", callEndedEventMessageDetail.callDuration);
        writer.writeEnumValue<TeamworkCallEventType>("callEventType", callEndedEventMessageDetail.callEventType);
        writer.writeStringValue("callId", callEndedEventMessageDetail.callId);
        writer.writeCollectionOfObjectValues<CallParticipantInfo>("callParticipants", callEndedEventMessageDetail.callParticipants, serializeCallParticipantInfo);
        writer.writeObjectValue<IdentitySet>("initiator", callEndedEventMessageDetail.initiator, serializeIdentitySet);
}
