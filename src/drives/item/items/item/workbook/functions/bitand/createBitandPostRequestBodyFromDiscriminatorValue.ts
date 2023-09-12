import { deserializeIntoBitandPostRequestBody } from './deserializeIntoBitandPostRequestBody';
import { type BitandPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBitandPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBitandPostRequestBody;
}
