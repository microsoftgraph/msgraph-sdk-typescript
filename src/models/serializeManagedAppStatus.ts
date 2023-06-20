import {ManagedAppStatus} from './managedAppStatus';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppStatus(managedAppStatus: ManagedAppStatus | undefined = {} as ManagedAppStatus, writer: SerializationWriter) : void {
        serializeEntity(writer, managedAppStatus)
        writer.writeStringValue("displayName", managedAppStatus.displayName);
        writer.writeStringValue("version", managedAppStatus.version);
}
