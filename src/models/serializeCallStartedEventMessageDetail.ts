import { type CallStartedEventMessageDetail } from './callStartedEventMessageDetail';
import { type IdentitySet } from './identitySet';
import { serializeEventMessageDetail } from './serializeEventMessageDetail';
import { serializeIdentitySet } from './serializeIdentitySet';
import { TeamworkCallEventType } from './teamworkCallEventType';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCallStartedEventMessageDetail(writer: SerializationWriter, callStartedEventMessageDetail: CallStartedEventMessageDetail | undefined = {} as CallStartedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, callStartedEventMessageDetail)
        writer.writeEnumValue<TeamworkCallEventType>("callEventType", callStartedEventMessageDetail.callEventType);
        writer.writeStringValue("callId", callStartedEventMessageDetail.callId);
        writer.writeObjectValue<IdentitySet>("initiator", callStartedEventMessageDetail.initiator, serializeIdentitySet);
}
