import { type DetectedApp } from './detectedApp';
import { DetectedAppPlatformType } from './detectedAppPlatformType';
import { type ManagedDevice } from './managedDevice';
import { serializeEntity } from './serializeEntity';
import { serializeManagedDevice } from './serializeManagedDevice';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDetectedApp(writer: SerializationWriter, detectedApp: DetectedApp | undefined = {} as DetectedApp) : void {
        serializeEntity(writer, detectedApp)
        writer.writeNumberValue("deviceCount", detectedApp.deviceCount);
        writer.writeStringValue("displayName", detectedApp.displayName);
        writer.writeCollectionOfObjectValues<ManagedDevice>("managedDevices", detectedApp.managedDevices, serializeManagedDevice);
        writer.writeEnumValue<DetectedAppPlatformType>("platform", detectedApp.platform);
        writer.writeStringValue("publisher", detectedApp.publisher);
        writer.writeNumberValue("sizeInByte", detectedApp.sizeInByte);
        writer.writeStringValue("version", detectedApp.version);
}
