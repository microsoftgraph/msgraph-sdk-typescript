import {deserializeIntoApplyHoldPostRequestBody} from './deserializeIntoApplyHoldPostRequestBody';
import {ApplyHoldPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplyHoldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplyHoldPostRequestBody;
}
