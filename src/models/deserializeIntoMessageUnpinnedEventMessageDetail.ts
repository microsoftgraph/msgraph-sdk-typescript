import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import type {IdentitySet} from './identitySet';
import type {MessageUnpinnedEventMessageDetail} from './messageUnpinnedEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMessageUnpinnedEventMessageDetail(messageUnpinnedEventMessageDetail: MessageUnpinnedEventMessageDetail | undefined = {} as MessageUnpinnedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(messageUnpinnedEventMessageDetail),
        "eventDateTime": n => { messageUnpinnedEventMessageDetail.eventDateTime = n.getDateValue(); },
        "initiator": n => { messageUnpinnedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
