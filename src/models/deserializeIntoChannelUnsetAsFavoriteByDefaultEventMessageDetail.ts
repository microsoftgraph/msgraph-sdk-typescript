import {ChannelUnsetAsFavoriteByDefaultEventMessageDetail} from './channelUnsetAsFavoriteByDefaultEventMessageDetail';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelUnsetAsFavoriteByDefaultEventMessageDetail(channelUnsetAsFavoriteByDefaultEventMessageDetail: ChannelUnsetAsFavoriteByDefaultEventMessageDetail | undefined = {} as ChannelUnsetAsFavoriteByDefaultEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(channelUnsetAsFavoriteByDefaultEventMessageDetail),
        "channelId": n => { channelUnsetAsFavoriteByDefaultEventMessageDetail.channelId = n.getStringValue(); },
        "initiator": n => { channelUnsetAsFavoriteByDefaultEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
