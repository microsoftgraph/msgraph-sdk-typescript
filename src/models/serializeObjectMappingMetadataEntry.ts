import {ObjectMappingMetadata} from './objectMappingMetadata';
import {ObjectMappingMetadataEntry} from './objectMappingMetadataEntry';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeObjectMappingMetadataEntry(writer: SerializationWriter, objectMappingMetadataEntry: ObjectMappingMetadataEntry | undefined = {} as ObjectMappingMetadataEntry) : void {
        writer.writeEnumValue<ObjectMappingMetadata>("key", objectMappingMetadataEntry.key);
        writer.writeStringValue("@odata.type", objectMappingMetadataEntry.odataType);
        writer.writeStringValue("value", objectMappingMetadataEntry.value);
        writer.writeAdditionalData(objectMappingMetadataEntry.additionalData);
}
