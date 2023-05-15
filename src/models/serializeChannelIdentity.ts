import {ChannelIdentity} from './channelIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelIdentity(writer: SerializationWriter, channelIdentity: ChannelIdentity | undefined = {} as ChannelIdentity) : void {
        writer.writeStringValue("channelId", channelIdentity.channelId);
        writer.writeStringValue("@odata.type", channelIdentity.odataType);
        writer.writeStringValue("teamId", channelIdentity.teamId);
        writer.writeAdditionalData(channelIdentity.additionalData);
}
