import {deserializeIntoRejectPostRequestBody} from './deserializeIntoRejectPostRequestBody';
import {RejectPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRejectPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRejectPostRequestBody;
}
