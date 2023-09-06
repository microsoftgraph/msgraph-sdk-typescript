import { deserializeIntoSchemaExtensionCollectionResponse } from './deserializeIntoSchemaExtensionCollectionResponse';
import { type SchemaExtensionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSchemaExtensionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSchemaExtensionCollectionResponse;
}
