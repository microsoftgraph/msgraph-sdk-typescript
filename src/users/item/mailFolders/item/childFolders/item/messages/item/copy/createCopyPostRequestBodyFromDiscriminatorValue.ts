import {deserializeIntoCopyPostRequestBody} from './deserializeIntoCopyPostRequestBody';
import {CopyPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCopyPostRequestBody;
}
