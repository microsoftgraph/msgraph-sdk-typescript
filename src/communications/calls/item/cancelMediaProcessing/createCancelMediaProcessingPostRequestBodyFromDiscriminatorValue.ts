import {deserializeIntoCancelMediaProcessingPostRequestBody} from './deserializeIntoCancelMediaProcessingPostRequestBody';
import {CancelMediaProcessingPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCancelMediaProcessingPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCancelMediaProcessingPostRequestBody;
}
