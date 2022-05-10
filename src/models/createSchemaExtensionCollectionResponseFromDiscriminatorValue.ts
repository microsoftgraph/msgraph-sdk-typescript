import {SchemaExtensionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSchemaExtensionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SchemaExtensionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SchemaExtensionCollectionResponseImpl();
}
