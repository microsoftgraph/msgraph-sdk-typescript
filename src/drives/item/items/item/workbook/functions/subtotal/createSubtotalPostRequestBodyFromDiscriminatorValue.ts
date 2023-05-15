import {deserializeIntoSubtotalPostRequestBody} from './deserializeIntoSubtotalPostRequestBody';
import {SubtotalPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSubtotalPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSubtotalPostRequestBody;
}
