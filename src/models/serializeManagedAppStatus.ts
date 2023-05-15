import {ManagedAppStatus} from './managedAppStatus';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeManagedAppStatus(writer: SerializationWriter, managedAppStatus: ManagedAppStatus | undefined = {} as ManagedAppStatus) : void {
        serializeEntity(writer, managedAppStatus)
        writer.writeStringValue("displayName", managedAppStatus.displayName);
        writer.writeStringValue("version", managedAppStatus.version);
}
