import {CallStartedEventMessageDetail} from './callStartedEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {TeamworkCallEventType} from './teamworkCallEventType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallStartedEventMessageDetail(writer: SerializationWriter, callStartedEventMessageDetail: CallStartedEventMessageDetail | undefined = {} as CallStartedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, callStartedEventMessageDetail)
        writer.writeEnumValue<TeamworkCallEventType>("callEventType", callStartedEventMessageDetail.callEventType);
        writer.writeStringValue("callId", callStartedEventMessageDetail.callId);
        writer.writeObjectValue<IdentitySet>("initiator", callStartedEventMessageDetail.initiator, serializeIdentitySet);
}
