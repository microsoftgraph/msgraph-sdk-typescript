import type {IdentitySet} from './identitySet';
import type {MessagePinnedEventMessageDetail} from './messagePinnedEventMessageDetail';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessagePinnedEventMessageDetail(writer: SerializationWriter, messagePinnedEventMessageDetail: MessagePinnedEventMessageDetail | undefined = {} as MessagePinnedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, messagePinnedEventMessageDetail)
        writer.writeDateValue("eventDateTime", messagePinnedEventMessageDetail.eventDateTime);
        writer.writeObjectValue<IdentitySet>("initiator", messagePinnedEventMessageDetail.initiator, serializeIdentitySet);
}
