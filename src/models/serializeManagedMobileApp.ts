import {ManagedMobileApp} from './managedMobileApp';
import {MobileAppIdentifier} from './mobileAppIdentifier';
import {serializeEntity} from './serializeEntity';
import {serializeMobileAppIdentifier} from './serializeMobileAppIdentifier';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedMobileApp(writer: SerializationWriter, managedMobileApp: ManagedMobileApp | undefined = {} as ManagedMobileApp) : void {
        serializeEntity(writer, managedMobileApp)
        writer.writeObjectValue<MobileAppIdentifier>("mobileAppIdentifier", managedMobileApp.mobileAppIdentifier, serializeMobileAppIdentifier);
        writer.writeStringValue("version", managedMobileApp.version);
}
