import {deserializeIntoYieldDiscPostRequestBody} from './deserializeIntoYieldDiscPostRequestBody';
import {YieldDiscPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createYieldDiscPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoYieldDiscPostRequestBody;
}
