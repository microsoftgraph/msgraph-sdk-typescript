import {deserializeIntoYieldMatPostRequestBody} from './deserializeIntoYieldMatPostRequestBody';
import {YieldMatPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createYieldMatPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoYieldMatPostRequestBody;
}
