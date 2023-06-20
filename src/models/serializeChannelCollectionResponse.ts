import {Channel} from './channel';
import {ChannelCollectionResponse} from './channelCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChannel} from './serializeChannel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelCollectionResponse(channelCollectionResponse: ChannelCollectionResponse | undefined = {} as ChannelCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, channelCollectionResponse)
        writer.writeCollectionOfObjectValues<Channel>("value", channelCollectionResponse.value, serializeChannel);
}
