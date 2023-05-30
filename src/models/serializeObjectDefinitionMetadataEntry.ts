import {ObjectDefinitionMetadata} from './objectDefinitionMetadata';
import {ObjectDefinitionMetadataEntry} from './objectDefinitionMetadataEntry';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeObjectDefinitionMetadataEntry(writer: SerializationWriter, objectDefinitionMetadataEntry: ObjectDefinitionMetadataEntry | undefined = {} as ObjectDefinitionMetadataEntry) : void {
        writer.writeEnumValue<ObjectDefinitionMetadata>("key", objectDefinitionMetadataEntry.key);
        writer.writeStringValue("@odata.type", objectDefinitionMetadataEntry.odataType);
        writer.writeStringValue("value", objectDefinitionMetadataEntry.value);
        writer.writeAdditionalData(objectDefinitionMetadataEntry.additionalData);
}
