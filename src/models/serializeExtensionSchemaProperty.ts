import { type ExtensionSchemaProperty } from './extensionSchemaProperty';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExtensionSchemaProperty(writer: SerializationWriter, extensionSchemaProperty: ExtensionSchemaProperty | undefined = {} as ExtensionSchemaProperty) : void {
        writer.writeStringValue("name", extensionSchemaProperty.name);
        writer.writeStringValue("@odata.type", extensionSchemaProperty.odataType);
        writer.writeStringValue("type", extensionSchemaProperty.type);
        writer.writeAdditionalData(extensionSchemaProperty.additionalData);
}
