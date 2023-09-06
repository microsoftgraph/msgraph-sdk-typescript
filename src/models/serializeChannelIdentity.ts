import { type ChannelIdentity } from './channelIdentity';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChannelIdentity(writer: SerializationWriter, channelIdentity: ChannelIdentity | undefined = {} as ChannelIdentity) : void {
        writer.writeStringValue("channelId", channelIdentity.channelId);
        writer.writeStringValue("@odata.type", channelIdentity.odataType);
        writer.writeStringValue("teamId", channelIdentity.teamId);
        writer.writeAdditionalData(channelIdentity.additionalData);
}
