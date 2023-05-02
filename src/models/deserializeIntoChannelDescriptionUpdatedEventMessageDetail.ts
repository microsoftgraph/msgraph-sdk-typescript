import {ChannelDescriptionUpdatedEventMessageDetail} from './channelDescriptionUpdatedEventMessageDetail';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelDescriptionUpdatedEventMessageDetail(channelDescriptionUpdatedEventMessageDetail: ChannelDescriptionUpdatedEventMessageDetail | undefined = {} as ChannelDescriptionUpdatedEventMessageDetail) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEventMessageDetail(channelDescriptionUpdatedEventMessageDetail),
        "channelDescription": n => { channelDescriptionUpdatedEventMessageDetail.channelDescription = n.getStringValue(); },
        "channelId": n => { channelDescriptionUpdatedEventMessageDetail.channelId = n.getStringValue(); },
        "initiator": n => { channelDescriptionUpdatedEventMessageDetail.initiator = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
    }
}
