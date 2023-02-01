import {OddLYieldPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOddLYieldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : OddLYieldPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OddLYieldPostRequestBody();
}
