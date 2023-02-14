import {YieldPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createYieldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : YieldPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new YieldPostRequestBody();
}
