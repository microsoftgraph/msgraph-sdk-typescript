import {YieldMatPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createYieldMatPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : YieldMatPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new YieldMatPostRequestBody();
}
