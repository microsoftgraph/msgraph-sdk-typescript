import {IdentitySet} from './identitySet';
import {MessagePinnedEventMessageDetail} from './messagePinnedEventMessageDetail';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessagePinnedEventMessageDetail(writer: SerializationWriter, messagePinnedEventMessageDetail: MessagePinnedEventMessageDetail | undefined = {} as MessagePinnedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, messagePinnedEventMessageDetail)
        writer.writeDateValue("eventDateTime", messagePinnedEventMessageDetail.eventDateTime);
        writer.writeObjectValue<IdentitySet>("initiator", messagePinnedEventMessageDetail.initiator, serializeIdentitySet);
}
