import { deserializeIntoTextPostRequestBody } from './deserializeIntoTextPostRequestBody';
import { type TextPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTextPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTextPostRequestBody;
}
