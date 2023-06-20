import {ManagedApp} from './managedApp';
import {ManagedAppAvailability} from './managedAppAvailability';
import {serializeMobileApp} from './serializeMobileApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedApp(managedApp: ManagedApp | undefined = {} as ManagedApp, writer: SerializationWriter) : void {
        serializeMobileApp(writer, managedApp)
        writer.writeEnumValue<ManagedAppAvailability>("appAvailability", managedApp.appAvailability);
        writer.writeStringValue("version", managedApp.version);
}
