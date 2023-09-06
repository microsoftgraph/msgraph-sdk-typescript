import { type ChannelIdentity } from './channelIdentity';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelIdentity(channelIdentity: ChannelIdentity | undefined = {} as ChannelIdentity) : Record<string, (node: ParseNode) => void> {
    return {
        "channelId": n => { channelIdentity.channelId = n.getStringValue(); },
        "@odata.type": n => { channelIdentity.odataType = n.getStringValue(); },
        "teamId": n => { channelIdentity.teamId = n.getStringValue(); },
    }
}
