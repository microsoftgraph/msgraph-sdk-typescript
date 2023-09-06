import { type ExtensionSchemaProperty } from './extensionSchemaProperty';
import { type SchemaExtension } from './schemaExtension';
import { serializeEntity } from './serializeEntity';
import { serializeExtensionSchemaProperty } from './serializeExtensionSchemaProperty';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSchemaExtension(writer: SerializationWriter, schemaExtension: SchemaExtension | undefined = {} as SchemaExtension) : void {
        serializeEntity(writer, schemaExtension)
        writer.writeStringValue("description", schemaExtension.description);
        writer.writeStringValue("owner", schemaExtension.owner);
        writer.writeCollectionOfObjectValues<ExtensionSchemaProperty>("properties", schemaExtension.properties, serializeExtensionSchemaProperty);
        writer.writeStringValue("status", schemaExtension.status);
        writer.writeCollectionOfPrimitiveValues<string>("targetTypes", schemaExtension.targetTypes);
}
