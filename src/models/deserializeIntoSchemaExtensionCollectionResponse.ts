import {createSchemaExtensionFromDiscriminatorValue} from './createSchemaExtensionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import type {SchemaExtension} from './schemaExtension';
import type {SchemaExtensionCollectionResponse} from './schemaExtensionCollectionResponse';
import {serializeSchemaExtension} from './serializeSchemaExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSchemaExtensionCollectionResponse(schemaExtensionCollectionResponse: SchemaExtensionCollectionResponse | undefined = {} as SchemaExtensionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(schemaExtensionCollectionResponse),
        "value": n => { schemaExtensionCollectionResponse.value = n.getCollectionOfObjectValues<SchemaExtension>(createSchemaExtensionFromDiscriminatorValue); },
    }
}
