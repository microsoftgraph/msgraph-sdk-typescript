import { deserializeIntoCopyPostRequestBody } from './deserializeIntoCopyPostRequestBody';
import { type CopyPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCopyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCopyPostRequestBody;
}
