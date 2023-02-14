import {BitandPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBitandPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : BitandPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BitandPostRequestBody();
}
