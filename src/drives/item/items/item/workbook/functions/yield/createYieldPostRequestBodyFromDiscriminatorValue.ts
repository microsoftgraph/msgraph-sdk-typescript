import {deserializeIntoYieldPostRequestBody} from './deserializeIntoYieldPostRequestBody';
import {YieldPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createYieldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoYieldPostRequestBody;
}
