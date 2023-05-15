import {ChannelSetAsFavoriteByDefaultEventMessageDetail} from './channelSetAsFavoriteByDefaultEventMessageDetail';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelSetAsFavoriteByDefaultEventMessageDetail(channelSetAsFavoriteByDefaultEventMessageDetail: ChannelSetAsFavoriteByDefaultEventMessageDetail | undefined = {} as ChannelSetAsFavoriteByDefaultEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(channelSetAsFavoriteByDefaultEventMessageDetail),
        "channelId": n => { channelSetAsFavoriteByDefaultEventMessageDetail.channelId = n.getStringValue(); },
        "initiator": n => { channelSetAsFavoriteByDefaultEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
