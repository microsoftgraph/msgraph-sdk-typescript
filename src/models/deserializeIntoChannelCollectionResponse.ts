import { type Channel } from './channel';
import { type ChannelCollectionResponse } from './channelCollectionResponse';
import { createChannelFromDiscriminatorValue } from './createChannelFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeChannel } from './serializeChannel';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelCollectionResponse(channelCollectionResponse: ChannelCollectionResponse | undefined = {} as ChannelCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(channelCollectionResponse),
        "value": n => { channelCollectionResponse.value = n.getCollectionOfObjectValues<Channel>(createChannelFromDiscriminatorValue); },
    }
}
