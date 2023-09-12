import { type Channel } from './channel';
import { type ChannelCollectionResponse } from './channelCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeChannel } from './serializeChannel';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChannelCollectionResponse(writer: SerializationWriter, channelCollectionResponse: ChannelCollectionResponse | undefined = {} as ChannelCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, channelCollectionResponse)
        writer.writeCollectionOfObjectValues<Channel>("value", channelCollectionResponse.value, serializeChannel);
}
