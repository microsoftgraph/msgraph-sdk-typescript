import { type ChannelAddedEventMessageDetail } from './channelAddedEventMessageDetail';
import { createIdentitySetFromDiscriminatorValue } from './createIdentitySetFromDiscriminatorValue';
import { deserializeIntoEventMessageDetail } from './deserializeIntoEventMessageDetail';
import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelAddedEventMessageDetail(channelAddedEventMessageDetail: ChannelAddedEventMessageDetail | undefined = {} as ChannelAddedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(channelAddedEventMessageDetail),
        "channelDisplayName": n => { channelAddedEventMessageDetail.channelDisplayName = n.getStringValue(); },
        "channelId": n => { channelAddedEventMessageDetail.channelId = n.getStringValue(); },
        "initiator": n => { channelAddedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
