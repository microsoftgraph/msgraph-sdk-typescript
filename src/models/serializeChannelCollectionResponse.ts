import {Channel} from './channel';
import {ChannelCollectionResponse} from './channelCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeChannel} from './serializeChannel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelCollectionResponse(writer: SerializationWriter, channelCollectionResponse: ChannelCollectionResponse | undefined = {} as ChannelCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, channelCollectionResponse)
        writer.writeCollectionOfObjectValues<Channel>("value", channelCollectionResponse.value, serializeChannel);
}
