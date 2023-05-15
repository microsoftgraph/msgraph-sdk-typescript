import {deserializeIntoCancelPostRequestBody} from './deserializeIntoCancelPostRequestBody';
import {CancelPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCancelPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCancelPostRequestBody;
}
