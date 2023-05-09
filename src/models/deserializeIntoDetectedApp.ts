import {createManagedDeviceFromDiscriminatorValue} from './createManagedDeviceFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DetectedApp} from './detectedApp';
import {DetectedAppPlatformType} from './detectedAppPlatformType';
import {ManagedDevice} from './managedDevice';
import {serializeManagedDevice} from './serializeManagedDevice';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDetectedApp(detectedApp: DetectedApp | undefined = {} as DetectedApp) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(detectedApp),
        "deviceCount": n => { detectedApp.deviceCount = n.getNumberValue(); },
        "displayName": n => { detectedApp.displayName = n.getStringValue(); },
        "managedDevices": n => { detectedApp.managedDevices = n.getCollectionOfObjectValues<ManagedDevice>(createManagedDeviceFromDiscriminatorValue); },
        "platform": n => { detectedApp.platform = n.getEnumValue<DetectedAppPlatformType>(DetectedAppPlatformType); },
        "publisher": n => { detectedApp.publisher = n.getStringValue(); },
        "sizeInByte": n => { detectedApp.sizeInByte = n.getNumberValue(); },
        "version": n => { detectedApp.version = n.getStringValue(); },
    }
}
