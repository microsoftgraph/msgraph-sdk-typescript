import {YieldDiscPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createYieldDiscPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : YieldDiscPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new YieldDiscPostRequestBody();
}
