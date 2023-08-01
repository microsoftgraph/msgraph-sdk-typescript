import type {SchemaExtension} from './schemaExtension';
import type {SchemaExtensionCollectionResponse} from './schemaExtensionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSchemaExtension} from './serializeSchemaExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSchemaExtensionCollectionResponse(writer: SerializationWriter, schemaExtensionCollectionResponse: SchemaExtensionCollectionResponse | undefined = {} as SchemaExtensionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, schemaExtensionCollectionResponse)
        writer.writeCollectionOfObjectValues<SchemaExtension>("value", schemaExtensionCollectionResponse.value, serializeSchemaExtension);
}
