import {deserializeIntoBitandPostRequestBody} from './deserializeIntoBitandPostRequestBody';
import {BitandPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitandPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBitandPostRequestBody;
}
