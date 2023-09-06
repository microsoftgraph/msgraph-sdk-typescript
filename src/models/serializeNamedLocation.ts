import { type NamedLocation } from './namedLocation';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeNamedLocation(writer: SerializationWriter, namedLocation: NamedLocation | undefined = {} as NamedLocation) : void {
        serializeEntity(writer, namedLocation)
        writer.writeDateValue("createdDateTime", namedLocation.createdDateTime);
        writer.writeStringValue("displayName", namedLocation.displayName);
        writer.writeDateValue("modifiedDateTime", namedLocation.modifiedDateTime);
}
