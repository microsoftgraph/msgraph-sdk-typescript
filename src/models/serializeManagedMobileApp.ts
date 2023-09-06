import { type ManagedMobileApp } from './managedMobileApp';
import { type MobileAppIdentifier } from './mobileAppIdentifier';
import { serializeEntity } from './serializeEntity';
import { serializeMobileAppIdentifier } from './serializeMobileAppIdentifier';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedMobileApp(writer: SerializationWriter, managedMobileApp: ManagedMobileApp | undefined = {} as ManagedMobileApp) : void {
        serializeEntity(writer, managedMobileApp)
        writer.writeObjectValue<MobileAppIdentifier>("mobileAppIdentifier", managedMobileApp.mobileAppIdentifier, serializeMobileAppIdentifier);
        writer.writeStringValue("version", managedMobileApp.version);
}
