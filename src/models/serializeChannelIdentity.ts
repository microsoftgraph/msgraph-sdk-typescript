import {ChannelIdentity} from './channelIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelIdentity(channelIdentity: ChannelIdentity | undefined = {} as ChannelIdentity, writer: SerializationWriter) : void {
        writer.writeStringValue("channelId", channelIdentity.channelId);
        writer.writeStringValue("@odata.type", channelIdentity.odataType);
        writer.writeStringValue("teamId", channelIdentity.teamId);
        writer.writeAdditionalData(channelIdentity.additionalData);
}
