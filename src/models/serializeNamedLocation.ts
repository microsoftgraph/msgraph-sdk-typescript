import {NamedLocation} from './namedLocation';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeNamedLocation(writer: SerializationWriter, namedLocation: NamedLocation | undefined = {} as NamedLocation) : void {
        serializeEntity(writer, namedLocation)
        writer.writeDateValue("createdDateTime", namedLocation.createdDateTime);
        writer.writeStringValue("displayName", namedLocation.displayName);
        writer.writeDateValue("modifiedDateTime", namedLocation.modifiedDateTime);
}
