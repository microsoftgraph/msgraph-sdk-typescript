import {deserializeIntoAbortPostRequestBody} from './deserializeIntoAbortPostRequestBody';
import {AbortPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAbortPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAbortPostRequestBody;
}
