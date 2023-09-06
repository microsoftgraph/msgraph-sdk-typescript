import { type ManagedAppOperation } from './managedAppOperation';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedAppOperation(writer: SerializationWriter, managedAppOperation: ManagedAppOperation | undefined = {} as ManagedAppOperation) : void {
        serializeEntity(writer, managedAppOperation)
        writer.writeStringValue("displayName", managedAppOperation.displayName);
        writer.writeDateValue("lastModifiedDateTime", managedAppOperation.lastModifiedDateTime);
        writer.writeStringValue("state", managedAppOperation.state);
        writer.writeStringValue("version", managedAppOperation.version);
}
