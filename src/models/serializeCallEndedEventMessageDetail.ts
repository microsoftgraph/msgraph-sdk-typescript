import {CallEndedEventMessageDetail} from './callEndedEventMessageDetail';
import {CallParticipantInfo} from './callParticipantInfo';
import {IdentitySet} from './identitySet';
import {serializeCallParticipantInfo} from './serializeCallParticipantInfo';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamworkCallEventType} from './teamworkCallEventType';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallEndedEventMessageDetail(writer: SerializationWriter, callEndedEventMessageDetail: CallEndedEventMessageDetail | undefined = {} as CallEndedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, callEndedEventMessageDetail)
        writer.writeDurationValue("callDuration", callEndedEventMessageDetail.callDuration);
        writer.writeEnumValue<TeamworkCallEventType>("callEventType", callEndedEventMessageDetail.callEventType);
        writer.writeStringValue("callId", callEndedEventMessageDetail.callId);
        writer.writeCollectionOfObjectValues<CallParticipantInfo>("callParticipants", callEndedEventMessageDetail.callParticipants, serializeCallParticipantInfo);
        writer.writeObjectValue<IdentitySet>("initiator", callEndedEventMessageDetail.initiator, serializeIdentitySet);
}
