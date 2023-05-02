import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {MessagePinnedEventMessageDetail} from './messagePinnedEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessagePinnedEventMessageDetail(messagePinnedEventMessageDetail: MessagePinnedEventMessageDetail | undefined = {} as MessagePinnedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(messagePinnedEventMessageDetail),
        "eventDateTime": n => { messagePinnedEventMessageDetail.eventDateTime = n.getDateValue(); },
        "initiator": n => { messagePinnedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
