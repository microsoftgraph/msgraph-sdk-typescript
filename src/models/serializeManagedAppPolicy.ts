import { type ManagedAppPolicy } from './managedAppPolicy';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeManagedAppPolicy(writer: SerializationWriter, managedAppPolicy: ManagedAppPolicy | undefined = {} as ManagedAppPolicy) : void {
        serializeEntity(writer, managedAppPolicy)
        writer.writeDateValue("createdDateTime", managedAppPolicy.createdDateTime);
        writer.writeStringValue("description", managedAppPolicy.description);
        writer.writeStringValue("displayName", managedAppPolicy.displayName);
        writer.writeDateValue("lastModifiedDateTime", managedAppPolicy.lastModifiedDateTime);
        writer.writeStringValue("version", managedAppPolicy.version);
}
