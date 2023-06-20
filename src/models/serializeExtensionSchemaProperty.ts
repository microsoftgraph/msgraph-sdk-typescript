import {ExtensionSchemaProperty} from './extensionSchemaProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExtensionSchemaProperty(extensionSchemaProperty: ExtensionSchemaProperty | undefined = {} as ExtensionSchemaProperty, writer: SerializationWriter) : void {
        writer.writeStringValue("name", extensionSchemaProperty.name);
        writer.writeStringValue("@odata.type", extensionSchemaProperty.odataType);
        writer.writeStringValue("type", extensionSchemaProperty.type);
        writer.writeAdditionalData(extensionSchemaProperty.additionalData);
}
