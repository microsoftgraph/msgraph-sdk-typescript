import { deserializeIntoProtectPostRequestBody } from './deserializeIntoProtectPostRequestBody';
import { type ProtectPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createProtectPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoProtectPostRequestBody;
}
