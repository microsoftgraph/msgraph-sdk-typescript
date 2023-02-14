import {SumSqPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSumSqPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : SumSqPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SumSqPostRequestBody();
}
