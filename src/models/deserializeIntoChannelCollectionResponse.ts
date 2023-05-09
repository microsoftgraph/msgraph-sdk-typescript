import {Channel} from './channel';
import {ChannelCollectionResponse} from './channelCollectionResponse';
import {createChannelFromDiscriminatorValue} from './createChannelFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeChannel} from './serializeChannel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelCollectionResponse(channelCollectionResponse: ChannelCollectionResponse | undefined = {} as ChannelCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(channelCollectionResponse),
        "value": n => { channelCollectionResponse.value = n.getCollectionOfObjectValues<Channel>(createChannelFromDiscriminatorValue); },
    }
}
