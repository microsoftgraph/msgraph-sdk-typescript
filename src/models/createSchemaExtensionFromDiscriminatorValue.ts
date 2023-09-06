import { deserializeIntoSchemaExtension } from './deserializeIntoSchemaExtension';
import { type SchemaExtension } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSchemaExtensionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSchemaExtension;
}
