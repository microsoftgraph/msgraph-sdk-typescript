import { type ChannelRenamedEventMessageDetail } from './channelRenamedEventMessageDetail';
import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEventMessageDetail } from './deserializeIntoEventMessageDetail';
import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelRenamedEventMessageDetail(channelRenamedEventMessageDetail: ChannelRenamedEventMessageDetail | undefined = {} as ChannelRenamedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(channelRenamedEventMessageDetail),
        "channelDisplayName": n => { channelRenamedEventMessageDetail.channelDisplayName = n.getStringValue(); },
        "channelId": n => { channelRenamedEventMessageDetail.channelId = n.getStringValue(); },
        "initiator": n => { channelRenamedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
