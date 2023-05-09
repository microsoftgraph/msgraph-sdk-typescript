import {deserializeIntoSchemaExtension} from './deserializeIntoSchemaExtension';
import {SchemaExtension} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSchemaExtensionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSchemaExtension;
}
