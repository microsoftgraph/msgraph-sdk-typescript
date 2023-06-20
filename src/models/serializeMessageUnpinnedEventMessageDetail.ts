import {IdentitySet} from './identitySet';
import {MessageUnpinnedEventMessageDetail} from './messageUnpinnedEventMessageDetail';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMessageUnpinnedEventMessageDetail(messageUnpinnedEventMessageDetail: MessageUnpinnedEventMessageDetail | undefined = {} as MessageUnpinnedEventMessageDetail, writer: SerializationWriter) : void {
        serializeEventMessageDetail(writer, messageUnpinnedEventMessageDetail)
        writer.writeDateValue("eventDateTime", messageUnpinnedEventMessageDetail.eventDateTime);
        writer.writeObjectValue<IdentitySet>("initiator", messageUnpinnedEventMessageDetail.initiator, serializeIdentitySet);
}
