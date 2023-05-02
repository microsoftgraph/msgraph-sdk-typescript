import {ChannelDeletedEventMessageDetail} from './channelDeletedEventMessageDetail';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelDeletedEventMessageDetail(channelDeletedEventMessageDetail: ChannelDeletedEventMessageDetail | undefined = {} as ChannelDeletedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(channelDeletedEventMessageDetail),
        "channelDisplayName": n => { channelDeletedEventMessageDetail.channelDisplayName = n.getStringValue(); },
        "channelId": n => { channelDeletedEventMessageDetail.channelId = n.getStringValue(); },
        "initiator": n => { channelDeletedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
