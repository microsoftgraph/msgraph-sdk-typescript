import {OddFYieldPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOddFYieldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : OddFYieldPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OddFYieldPostRequestBody();
}
