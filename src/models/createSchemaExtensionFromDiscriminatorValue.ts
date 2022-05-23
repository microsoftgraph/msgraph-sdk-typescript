import {SchemaExtensionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSchemaExtensionFromDiscriminatorValue(parseNode: ParseNode | undefined) : SchemaExtensionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SchemaExtensionImpl();
}
