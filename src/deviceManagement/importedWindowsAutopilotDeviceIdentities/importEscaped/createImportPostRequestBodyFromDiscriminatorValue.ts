import { deserializeIntoImportPostRequestBody } from './deserializeIntoImportPostRequestBody';
import { type ImportPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImportPostRequestBody;
}
