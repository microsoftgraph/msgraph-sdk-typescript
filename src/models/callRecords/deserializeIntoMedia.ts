import { createDeviceInfoFromDiscriminatorValue } from './createDeviceInfoFromDiscriminatorValue';
import { createMediaStreamFromDiscriminatorValue } from './createMediaStreamFromDiscriminatorValue';
import { createNetworkInfoFromDiscriminatorValue } from './createNetworkInfoFromDiscriminatorValue';
import { type DeviceInfo } from './deviceInfo';
import { type Media } from './media';
import { type MediaStream } from './mediaStream';
import { type NetworkInfo } from './networkInfo';
import { serializeDeviceInfo } from './serializeDeviceInfo';
import { serializeMediaStream } from './serializeMediaStream';
import { serializeNetworkInfo } from './serializeNetworkInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoMedia(media: Media | undefined = {} as Media) : Record<string, (node: ParseNode) => void> {
    return {
        "calleeDevice": n => { media.calleeDevice = n.getObjectValue<DeviceInfo>(createDeviceInfoFromDiscriminatorValue); },
        "calleeNetwork": n => { media.calleeNetwork = n.getObjectValue<NetworkInfo>(createNetworkInfoFromDiscriminatorValue); },
        "callerDevice": n => { media.callerDevice = n.getObjectValue<DeviceInfo>(createDeviceInfoFromDiscriminatorValue); },
        "callerNetwork": n => { media.callerNetwork = n.getObjectValue<NetworkInfo>(createNetworkInfoFromDiscriminatorValue); },
        "label": n => { media.label = n.getStringValue(); },
        "@odata.type": n => { media.odataType = n.getStringValue(); },
        "streams": n => { media.streams = n.getCollectionOfObjectValues<MediaStream>(createMediaStreamFromDiscriminatorValue); },
    }
}
