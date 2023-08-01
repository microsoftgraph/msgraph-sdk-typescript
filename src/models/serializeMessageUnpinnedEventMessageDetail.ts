import type {IdentitySet} from './identitySet';
import type {MessageUnpinnedEventMessageDetail} from './messageUnpinnedEventMessageDetail';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessageUnpinnedEventMessageDetail(writer: SerializationWriter, messageUnpinnedEventMessageDetail: MessageUnpinnedEventMessageDetail | undefined = {} as MessageUnpinnedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, messageUnpinnedEventMessageDetail)
        writer.writeDateValue("eventDateTime", messageUnpinnedEventMessageDetail.eventDateTime);
        writer.writeObjectValue<IdentitySet>("initiator", messageUnpinnedEventMessageDetail.initiator, serializeIdentitySet);
}
