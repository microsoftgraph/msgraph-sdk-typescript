import {SchemaExtension} from './schemaExtension';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSchemaExtensionFromDiscriminatorValue(parseNode: ParseNode | undefined) : SchemaExtension {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SchemaExtension();
}
