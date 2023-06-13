import {DirectoryDefinition} from './directoryDefinition';
import {DirectoryDefinitionDiscoverabilities} from './directoryDefinitionDiscoverabilities';
import {ObjectDefinition} from './objectDefinition';
import {serializeEntity} from './serializeEntity';
import {serializeObjectDefinition} from './serializeObjectDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryDefinition(writer: SerializationWriter, directoryDefinition: DirectoryDefinition | undefined = {} as DirectoryDefinition) : void {
        serializeEntity(writer, directoryDefinition)
        writer.writeEnumValue<DirectoryDefinitionDiscoverabilities>("discoverabilities", directoryDefinition.discoverabilities);
        writer.writeDateValue("discoveryDateTime", directoryDefinition.discoveryDateTime);
        writer.writeStringValue("name", directoryDefinition.name);
        writer.writeCollectionOfObjectValues<ObjectDefinition>("objects", directoryDefinition.objects, serializeObjectDefinition);
        writer.writeBooleanValue("readOnly", directoryDefinition.readOnly);
        writer.writeStringValue("version", directoryDefinition.version);
}
