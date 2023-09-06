import { type ManagedAppStatus } from './managedAppStatus';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedAppStatus(writer: SerializationWriter, managedAppStatus: ManagedAppStatus | undefined = {} as ManagedAppStatus) : void {
        serializeEntity(writer, managedAppStatus)
        writer.writeStringValue("displayName", managedAppStatus.displayName);
        writer.writeStringValue("version", managedAppStatus.version);
}
