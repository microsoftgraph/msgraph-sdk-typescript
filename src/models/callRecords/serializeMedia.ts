import {DeviceInfo} from './deviceInfo';
import {Media} from './media';
import {MediaStream} from './mediaStream';
import {NetworkInfo} from './networkInfo';
import {serializeDeviceInfo} from './serializeDeviceInfo';
import {serializeMediaStream} from './serializeMediaStream';
import {serializeNetworkInfo} from './serializeNetworkInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMedia(writer: SerializationWriter, media: Media | undefined = {} as Media) : void {
        writer.writeObjectValue<DeviceInfo>("calleeDevice", media.calleeDevice, serializeDeviceInfo);
        writer.writeObjectValue<NetworkInfo>("calleeNetwork", media.calleeNetwork, serializeNetworkInfo);
        writer.writeObjectValue<DeviceInfo>("callerDevice", media.callerDevice, serializeDeviceInfo);
        writer.writeObjectValue<NetworkInfo>("callerNetwork", media.callerNetwork, serializeNetworkInfo);
        writer.writeStringValue("label", media.label);
        writer.writeStringValue("@odata.type", media.odataType);
        writer.writeCollectionOfObjectValues<MediaStream>("streams", media.streams, serializeMediaStream);
        writer.writeAdditionalData(media.additionalData);
}
