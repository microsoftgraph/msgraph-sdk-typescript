import {IdentitySet} from './identitySet';
import {MessagePinnedEventMessageDetail} from './messagePinnedEventMessageDetail';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessagePinnedEventMessageDetail(messagePinnedEventMessageDetail: MessagePinnedEventMessageDetail | undefined = {} as MessagePinnedEventMessageDetail, writer: SerializationWriter) : void {
        serializeEventMessageDetail(writer, messagePinnedEventMessageDetail)
        writer.writeDateValue("eventDateTime", messagePinnedEventMessageDetail.eventDateTime);
        writer.writeObjectValue<IdentitySet>("initiator", messagePinnedEventMessageDetail.initiator, serializeIdentitySet);
}
